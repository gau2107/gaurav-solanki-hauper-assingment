import React from "react";
import FormError from "./FormError";

export default function FormInput({
  id,
  label,
  name,
  type,
  register,
  rules,
  errors,
  errorMsg,
}) {
  const { ref, ...rest } = register(name, rules);
  return (
    <div className="mb-2 text-left">
      <label className="block text-left" htmlFor={id}>
        {label}
      </label>
      <input
        className="border border-black text-sm rounded-lg  block w-full p-2.5 "
        ref={ref}
        {...rest}
        id={id}
        name={name}
        type={type}
      />
      <FormError msg={errorMsg || errors?.[name]?.message} />
    </div>
  );
}
