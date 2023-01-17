import React, { useEffect, useId, useState } from "react";
import StepOne from "./components/add/StepOne";
import StepTwo from "./components/add/StepTwo";
import StepThree from "./components/add/StepThree";
import { useForm } from "react-hook-form";
import StepFour from "./components/add/StepFour";
import FormButton from "./components/common/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { applicantDataActions } from "./slices/applicant-data-slices";
export default function Add() {
  const initialValue = {
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    address: "",
    bankName: "",
    ifscCode: "",
    panNo: "",
    accountNo: "",
    educationHistory: [{}],
    workHistory: [{}],
  };
  const {
    register,
    trigger,
    getValues,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      ...initialValue,
    },
  });

  const dispatch = useDispatch();
  const editData = useSelector((state) => state.applicantData.selectedData);
  const list = useSelector((state) => state.applicantData.list);

  const stepOneFormFields = [
    "firstName",
    "lastName",
    "dob",
    "mobileNo",
    "address",
  ];
  useEffect(() => {
    if (editData && editData.id) reset({ ...editData });
  }, []);

  const stepTwoFormFields = ["bankName", "ifscCode", "panNo", "accountNo"];

  const handleNext = async () => {
    let result = false;
    switch (stepper) {
      case 1:
        result = await trigger(stepOneFormFields);
        result && setStepper(stepper + 1);
        break;
      case 2:
        result = await trigger(stepTwoFormFields);
        result && setStepper(stepper + 1);
        break;
      case 3:
        result = await trigger("educationHistory");
        result && setStepper(stepper + 1);
        break;
      case 4:
        result = await trigger("workHistory");
        result && handleSubmit();
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const data = getValues();
    if (data.id) {
      dispatch(applicantDataActions.edit({ data: data }));
    } else dispatch(applicantDataActions.add({ ...data, id: list.length + 1 }));
    setStepper(1);
    setCallbackMsg(
      `Applicant details ${data.id ? "updated" : "added"} successfully!`
    );

    reset({ ...initialValue });
  };

  const commonProps = { register, trigger, errors };
  const [stepper, setStepper] = useState(1);
  const [callbackMsg, setCallbackMsg] = useState("");

  useEffect(() => {
    if (!callbackMsg) return;
    setTimeout(() => {
      setCallbackMsg("");
    }, 5000);
  }, [callbackMsg]);

  return (
    <div className="px-64">
      <form className="grid grid-cols-1 gap-2">
        {callbackMsg && (
          <alert className="border border-green-500 bg-green-100 m-4 px-4 py-3 rounded relative">
            {callbackMsg}
          </alert>
        )}
        {stepper === 1 && <StepOne {...commonProps} />}
        {stepper === 2 && <StepTwo {...commonProps} />}
        {stepper === 3 && <StepThree {...commonProps} control={control} />}
        {stepper === 4 && <StepFour {...commonProps} control={control} />}
        {stepper > 1 && (
          <FormButton
            label={"Back"}
            type={"button"}
            onClick={() => setStepper(stepper - 1)}
          />
        )}
        <FormButton
          label={stepper !== 4 ? "Next" : "Submit"}
          type={"button"}
          onClick={() => handleNext()}
        />
      </form>
    </div>
  );
}
