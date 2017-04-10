export default class User {
  constructor() {
    this._auth = null;
    this._details = {};
    this._duration = null;
    this._id = null;
    this._permissions = {};
    this._token = null;
  }

  auth(value = null) {
    if (value === null) {
      return this._auth;
    }

    this._auth = value;
    return this;
  }

  detail(name) {
    return this._details[name];
  }

  details(value = null) {
    if (value === null) {
      return this._details;
    }

    this._details = value;
    return this;
  }

  duration(value = null) {
    if (value === null) {
      return this._duration;
    }

    this._duration = value;
    return this;
  }

  id(value = null) {
    if (value === null) {
      return this._id;
    }

    this._id = value;
    return this;
  }

  permissions(value = null) {
    if (value === null) {
      return this._permissions;
    }

    this._permissions = value;
    return this;
  }

  token(value = null) {
    if (value === null) {
      return this._token;
    }

    this._token = value;
    return this;
  }

  may(part, permission) {
    return (this._permissions[part] & permission) > 0;
  }

  toObject() {
    return {
      details: this._details,
      id: this._id,
      permissions: this._permissions,
      token: this._token
    };
  }
}
