import { Validator } from '@scola/validator';

const resetValidator = new Validator();

resetValidator
  .field('username').required().email();

export default resetValidator;
