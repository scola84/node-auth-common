import merge from 'lodash-es/merge';
import User from './user';

export default class Auth {
  constructor() {
    this._dao = null;
    this._key = null;
    this._cache = null;
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

  cache(value = null) {
    if (value === null) {
      return this._cache;
    }

    this._cache = value;
    return this;
  }

  roles(value = null) {
    if (value === null) {
      return this._roles;
    }

    merge(this._roles, value);
    return this;
  }

  user(value = {}) {
    const user = new User()
      .auth(this);

    user.details(value.details);
    user.id(value.id);
    user.roles(value.roles);
    user.token(value.token);

    return user;
  }
}
