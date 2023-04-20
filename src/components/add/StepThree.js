import React from "react";
import { useFieldArray } from "react-hook-form";
import FormInput from "../common/FormInput";
import {
  schoolNameRules,
  passingYearRules,
  marksRules,
  resultRules,
} from "../../constants/Rules";
import FormButton from "../common/FormButton";
export default function StepThree({ register, errors, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationHistory",
  });
  
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={index}>
            <FormInput
              label={"School Name"}
              name={`educationHistory.${index}.schoolName`}
              id={`educationHistory.${index}.schoolName`}
              type={"text"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["educationHistory"]?.[index]?.["schoolName"]?.[
                  "message"
                ]
              }
              rules={schoolNameRules}
            />
            <FormInput
              label={"Passing Year"}
              name={`educationHistory.${index}.passingYear`}
              id={`educationHistory.${index}.passingYear`}
              type={"text"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["educationHistory"]?.[index]?.["passingYear"]?.[
                  "message"
                ]
              }
              rules={passingYearRules}
            />
            <FormInput
              label={"Marks"}
              name={`educationHistory.${index}.marks`}
              id={`educationHistory.${index}.marks`}
              type={"number"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["educationHistory"]?.[index]?.["marks"]?.["message"]
              }
              rules={marksRules}
            />
            <FormInput
              label={"Result"}
              name={`educationHistory.${index}.result`}
              id={`educationHistory.${index}.result`}
              type={"text"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["educationHistory"]?.[index]?.["result"]?.["message"]
              }
              rules={resultRules}
            />

            {fields.length > 1 && (
              <FormButton
                label={"Remove"}
                type={"button"}
                onClick={() => remove(index)}
              />
            )}
            {fields.length === index + 1 && (
              <FormButton
                label={"Add"}
                type={"button"}
                onClick={() => append({})}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
