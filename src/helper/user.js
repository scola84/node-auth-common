const roles = {};
const permissions = {};

export default class User {
  constructor() {
    this._id = null;
    this._token = null;
    this._username = null;
    this._roles = null;
  }

  id(value) {
    if (typeof value === 'undefined') {
      return this._id;
    }

    this._id = value;
    return this;
  }

  token(value) {
    if (typeof value === 'undefined') {
      return this._token;
    }

    this._token = value;
    return this;
  }

  username(value) {
    if (typeof value === 'undefined') {
      return this._username;
    }

    this._username = value;
    return this;
  }

  roles(value) {
    if (typeof value === 'undefined') {
      return this._roles;
    }

    if (this._roles) {
      return this;
    }

    this._roles = value;
    return this;
  }

  is(...list) {
    list = list.reduce((result, current) => {
      return result | roles[current];
    }, 0);

    return (this._roles & list) !== 0;
  }

  may(method, name) {
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
      username: this._username,
      roles: this._roles
    };
  }

  static permission(name, value) {
    permissions[name] = value;
  }

  static role(name, value) {
    roles[name] = value;
  }

  static fromObject(user) {
    return new User()
      .id(user.id)
      .username(user.username)
      .roles(user.roles);
  }
}
