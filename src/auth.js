import merge from 'lodash-es/merge';
import User from './user';

export default class Auth {
  constructor() {
    this._dao = null;
    this._key = null;
    this._roles = {};
  }

  dao(value = null) {
    if (value === null) {
      return this._dao;
    }

    this._dao = value;
    return this;
  }

  key(value = null) {
    if (value === null) {
      return this._key;
    }

    this._key = value;
    return this;
  }

  model(value = null) {
    if (value === null) {
      return this._model;
    }

    this._model = value;
    return this;
  }

  roles(value = null) {
    if (value === null) {
      return this._roles;
    }

    merge(this._roles, value);
    return this;
  }

  user(value) {
    const user = new User()
      .auth(this);

    if (value) {
      user.details(value.details);
      user.id(value.id);
      user.roles(value.roles);
      user.token(value.token);
    }

    return user;
  }
}
