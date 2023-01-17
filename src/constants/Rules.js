export const firstNameRules = {
  required: "First name is required",
};
export const lastNameRules = {
  required: "Last name is required",
};
export const DOBRules = {
  required: "DOB is required",
};
export const mobileNoRules = {
  required: "Mobile number is required",
  minLength: {
    value: 10,
    message: "Mobile number must be 10 digit long",
  },
  maxLength: {
    value: 10,
    message: "Mobile number must be 10 digit long",
  },
};
export const addressRules = {
  required: "Address is required",
};
export const BankNameRules = {
  required: "Bank Name is required",
};
export const IFSCRules = {
  required: "IFSC Code is required",
};
export const PANRules = {
  required: "PAN No is required",
  pattern: {
    value: /[^a-z0-9]/g,
    message: "PAN must be alphanumeric",
  },
  minLength: {
    value: 10,
    message: "PAN must be 10 digit long",
  },
  maxLength: {
    value: 10,
    message: "PAN must be 10 digit long",
  },
};
export const accountNoRules = {
  required: "Account No is required",
};
export const schoolNameRules = {
  required: "School name is required",
};
export const passingYearRules = {
  required: "Passing year is required",
};
export const marksRules = {
  required: "Marks is required",
};
export const resultRules = {
  required: "Result is required",
};
export const companyNameRules = {
  required: "Company name is required",
};
export const roleRules = {
  required: "Role is required",
};
export const salaryRules = {
  required: "Salary is required",
};
export const joinDateRules = {
  required: "Joining date is required",
};
export const lastDayOfWorkRules = {
  required: "Last day of work is required",
};
export const reasonRules = {
  required: "Reason for leaving to company is required",
};
