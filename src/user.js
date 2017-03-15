import get from 'lodash-es/get';

export default class User {
  constructor() {
    this._auth = null;
    this._details = null;
    this._id = null;
    this._roles = null;
    this._token = null;
  }

  auth(value = null) {
    if (value === null) {
      return this._auth;
    }

    this._auth = value;
    return this;
  }

  details(value = null) {
    if (value === null) {
      return this._details;
    }

    this._details = value;
    return this;
  }

  detail(name) {
    return get(this._details, name);
  }

  id(value = null) {
    if (value === null) {
      return this._id;
    }

    this._id = value;
    return this;
  }

  roles(value = null) {
    if (value === null) {
      return this._roles;
    }

    this._roles = value;
    return this;
  }

  token(value = null) {
    if (value === null) {
      return this._token;
    }

    this._token = value;
    return this;
  }

  highest(name = false) {
    // Adapted from http://stackoverflow.com/a/672137
    let role = this._roles;

    for (let i = 0; i < 5; i += 1) {
      role |= (role >> Math.pow(2, i));
    }

    role = (role & ~(role >> 1));
    return name === true ? this.name(role) : role;
  }

  name(number) {
    let result = '';
    const roles = this._auth.roles();

    Object.keys(roles).forEach((name) => {
      result = roles[name] === number ? name : result;
    });

    return result;
  }

  is(list) {
    const roles = this._auth.roles();

    list = list.reduce((result, current) => {
      return result | roles[current];
    }, 0);

    return (this._roles & list) !== 0;
  }

  toObject() {
    return {
      details: this._details,
      id: this._id,
      roles: this._roles,
      token: this._token
    };
  }
}
