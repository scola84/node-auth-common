import Auth from './src/auth';
import User from './src/user';
import passwordValidator from './src/validator/password';
import resetValidator from './src/validator/reset';
import setValidator from './src/validator/set';
import tokenValidator from './src/validator/token';
import strings from './src/i18n/strings';

function load(app) {
  if (app.i18n()) {
    app.i18n().strings(strings);
  }
}

export {
  Auth,
  User,
  passwordValidator,
  resetValidator,
  setValidator,
  tokenValidator,
  load
};
