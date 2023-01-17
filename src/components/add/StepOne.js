import React from "react";
import {
  firstNameRules,
  lastNameRules,
  DOBRules,
  mobileNoRules,
  addressRules,
} from "../../constants/Rules";
import FormInput from "../common/FormInput";
export default function StepOne({ register, errors }) {
  return (
    <div>
      <FormInput
        label={"First Name"}
        name={"firstName"}
        id={"firstName"}
        type={"text"}
        register={register}
        errors={errors}
        rules={firstNameRules}
      />
      <FormInput
        label={"Last Name"}
        name={"lastName"}
        id={"lastName"}
        type={"text"}
        register={register}
        errors={errors}
        rules={lastNameRules}
      />
      <FormInput
        label={"DOB"}
        name={"dob"}
        id={"dob"}
        type={"date"}
        register={register}
        errors={errors}
        rules={DOBRules}
      />
      <FormInput
        label={"Mobile No"}
        name={"mobileNo"}
        id={"mobileNo"}
        type={"number"}
        register={register}
        errors={errors}
        rules={mobileNoRules}
      />
      <FormInput
        label={"Address"}
        name={"address"}
        id={"address"}
        type={"textarea"}
        register={register}
        errors={errors}
        rules={addressRules}
      />
    </div>
  );
}
