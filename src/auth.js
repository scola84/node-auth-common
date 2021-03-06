import merge from 'lodash-es/merge';
import User from './user';

export default class Auth {
  constructor() {
    this._cache = null;
    this._dao = null;
    this._masks = {};

    this._password = true;
    this._reset = true;
    this._token = true;
  }

  destroy() {
    if (this._cache) {
      this._cache.destroy();
      this._cache = null;
    }
  }

  cache(value = null) {
    if (value === null) {
      return this._cache;
    }

    this._cache = value;
    return this;
  }

  dao(value = null) {
    if (value === null) {
      return this._dao;
    }

    this._dao = value;
    return this;
  }

  masks(value = null) {
    if (value === null) {
      return this._masks;
    }

    merge(this._masks, value);
    return this;
  }

  password(value = null) {
    if (value === null) {
      return this._password;
    }

    this._password = value;
    return this;
  }

  reset(value = null) {
    if (value === null) {
      return this._reset;
    }

    this._reset = value;
    return this;
  }

  token(value = null) {
    if (value === null) {
      return this._token;
    }

    this._token = value;
    return this;
  }

  user(value = {}) {
    const user = new User()
      .auth(this);

    user.details(value.details);
    user.duration(value.duration);
    user.id(value.id);
    user.masks(this._masks);
    user.permissions(value.permissions);
    user.token(value.token);

    return user;
  }
}
