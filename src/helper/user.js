const rolesByName = {};
const rolesByValue = {};

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

  is(...roles) {
    roles = roles.reduce((result, current) => {
      return result | rolesByName[current];
    }, 0);

    return (this._roles & roles) !== 0;
  }

  highest() {
    // Adapted from http://stackoverflow.com/a/672137
    let roles = this._roles;

    for (let i = 0; i < 5; i += 1) {
      roles |= (roles >> Math.pow(2, i));
    }

    return (roles & ~(roles >> 1));
  }

  roleName(value) {
    return rolesByValue[value];
  }

  roleValue(name) {
    return rolesByName[name];
  }

  toObject() {
    return {
      id: this._id,
      username: this._username,
      roles: this._roles
    };
  }

  static defineRole(name, value) {
    rolesByName[name] = value;
    rolesByValue[value] = name;
  }

  static fromObject(user) {
    return new User()
      .id(user.id)
      .username(user.username)
      .roles(user.roles);
  }
}
