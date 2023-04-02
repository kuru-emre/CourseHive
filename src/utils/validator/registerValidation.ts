// Author: Dhruvil Trivedi
// This is the validation error page for Registration, where all the error messages are set.

export const registerValidation = (
  email: string,
  password: string,
  name: string,
  eduName: string
) => {
  let errors = {
    email: "",
    name: "",
    password: "",
    eduName: "",
  };

  if (!email) {
    errors.email = "email is required";
  }
  if (!name) {
    errors.name = "name is required";
  }

  if (!password) {
    errors.password = "password is required";
  } else if (password.length < 5) {
    errors.password = "password must be at least 5 characters";
  }

  if (!eduName) {
    errors.eduName = "Institution name is required";
  }

  return errors;
};
