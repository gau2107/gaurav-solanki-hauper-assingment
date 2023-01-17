import React from "react";
import FormInput from "../common/FormInput";
import {
  BankNameRules,
  IFSCRules,
  PANRules,
  accountNoRules,
} from "../../constants/Rules";
export default function StepTwo({ register, errors }) {
  return (
    <div>
      <FormInput
        label={"Bank Name"}
        name={"bankName"}
        id={"bankName"}
        type={"text"}
        register={register}
        errors={errors}
        rules={BankNameRules}
      />
      <FormInput
        label={"IFSC Code"}
        name={"ifscCode"}
        id={"ifscCode"}
        type={"text"}
        register={register}
        errors={errors}
        rules={IFSCRules}
      />
      <FormInput
        label={"PAN No."}
        name={"panNo"}
        id={"panNo"}
        type={"text"}
        register={register}
        errors={errors}
        rules={PANRules}
      />
      <FormInput
        label={"Account No."}
        name={"accountNo"}
        id={"accountNo"}
        type={"number"}
        register={register}
        errors={errors}
        rules={accountNoRules}
      />
    </div>
  );
}
