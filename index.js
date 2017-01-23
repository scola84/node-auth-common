import strings from './src/i18n/strings';

export { default as Auth } from './src/auth';
export { default as User } from './src/user';
export { default as passwordValidator } from './src/validator/password';
export { default as tokenValidator } from './src/validator/token';

export function load(app) {
  app.i18n().strings(strings);
}
