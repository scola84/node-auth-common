import { Validator } from '@scola/validator';

const setValidator = new Validator();

// See https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\]\^_`\{\|\}~])(?=.{8,})/;

function checkAgain(field, value, errors) {
  if (value.password !== value.password2) {
    errors.password2 = {
      equal: false
    };
  }
}

setValidator
  .field('token').required().string().min(128).max(128)
  .field('password').required().regexp().match(regexp)
  .field('*').custom().fn(checkAgain);

export default setValidator;
