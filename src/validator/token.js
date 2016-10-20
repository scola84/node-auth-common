import { Validator } from '@scola/validator';

const tokenValidator = new Validator();

tokenValidator
  .field('token').required().string();

export default tokenValidator;
