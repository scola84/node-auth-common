import { Validator } from '@scola/validator';

const passwordValidator = new Validator();

passwordValidator
  .field('username').required().string()
  .field('password').required().string();

export default passwordValidator;
