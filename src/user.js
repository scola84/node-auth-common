export default class User {
  constructor() {
    this._auth = null;
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

  id(value = null) {
    if (value === null) {
      return this._id;
    }

    this._id = value;
    return this;
  }

  token(value = null) {
    if (value === null) {
      return this._token;
    }

    this._token = value;
    return this;
  }

  roles(value = null) {
    if (value === null) {
      return this._roles;
    }

    if (this._roles) {
      return this;
    }

    this._roles = value;
    return this;
  }

  is(...list) {
    const roles = this._auth.roles();

    list = list.reduce((result, current) => {
      return result | roles[current];
    }, 0);

    return (this._roles & list) !== 0;
  }

  may(method, name) {
    const roles = this._auth.roles();
    const permissions = this._auth.permissions();

    let may = false;

    Object.keys(roles).forEach((role) => {
      may = may || Boolean(this.is(role) &&
        permissions[name] &&
        permissions[name][role] &&
        permissions[name][role].indexOf(method) !== -1);
    });

    return may;
  }

  highest() {
    // Adapted from http://stackoverflow.com/a/672137
    let list = this._roles;

    for (let i = 0; i < 5; i += 1) {
      list |= (list >> Math.pow(2, i));
    }

    return (list & ~(list >> 1));
  }

  toObject() {
    return {
      id: this._id,
      roles: this._roles,
      token: this._token
    };
  }
}
