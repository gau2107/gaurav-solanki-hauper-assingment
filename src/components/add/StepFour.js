import React from "react";
import { useFieldArray } from "react-hook-form";
import {
  companyNameRules,
  roleRules,
  salaryRules,
  joinDateRules,
  lastDayOfWorkRules,
  reasonRules,
} from "../../constants/Rules";
import FormButton from "../common/FormButton";
import FormInput from "../common/FormInput";
export default function StepFour({ register, errors, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workHistory",
  });
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={index}>
            <FormInput
              label={"Company Name"}
              name={`workHistory.${index}.companyName`}
              id={`workHistory.${index}.companyName`}
              type={"text"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["workHistory"]?.[index]?.["schoolName"]?.[
                  "companyName"
                ]
              }
              rules={companyNameRules}
            />
            <FormInput
              label={"Role"}
              name={`workHistory.${index}.role`}
              id={`workHistory.${index}.role`}
              type={"text"}
              register={register}
              errors={errors}
              errorMsg={errors?.["workHistory"]?.[index]?.["role"]?.["message"]}
              rules={roleRules}
            />
            <FormInput
              label={"Salary"}
              name={`workHistory.${index}.salary`}
              id={`workHistory.${index}.salary`}
              type={"text"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["workHistory"]?.[index]?.["salary"]?.["message"]
              }
              rules={salaryRules}
            />
            <FormInput
              label={"Joining Date"}
              name={`workHistory.${index}.joinDate`}
              id={`workHistory.${index}.joinDate`}
              type={"date"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["workHistory"]?.[index]?.["joinDate"]?.["message"]
              }
              rules={joinDateRules}
            />
            <FormInput
              label={"Last working day"}
              name={`workHistory.${index}.lastDay`}
              id={`workHistory.${index}.lastDay`}
              type={"date"}
              register={register}
              errors={errors}
              errorMsg={
                errors?.["workHistory"]?.[index]?.["lastDay"]?.["message"]
              }
              rules={lastDayOfWorkRules}
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
