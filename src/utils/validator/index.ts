import { loginValidation } from './loginValidation'
import { registerValidation } from "./registerValidation";

export const validator = {
  loginValidation,
  registerValidation,
};

export type Validator = typeof validator;
