import User from './user';

export default class Auth {
  constructor() {
    this._cache = null;
    this._dao = null;
    this._key = null;
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

  key(value = null) {
    if (value === null) {
      return this._key;
    }

    this._key = value;
    return this;
  }

  user(value = {}) {
    const user = new User()
      .auth(this);

    user.details(value.details);
    user.duration(value.duration);
    user.id(value.id);
    user.permissions(value.permissions);
    user.token(value.token);

    return user;
  }
}
