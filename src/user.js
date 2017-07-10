export default class User {
  constructor() {
    this._auth = null;
    this._details = {};
    this._duration = null;
    this._id = null;
    this._masks = {};
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

  masks(value = null) {
    if (value === null) {
      return this._masks;
    }

    this._masks = value;
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

  may(part, ...fields) {
    return fields.some((field) => {
      return field.indexOf('*') > -1 ?
        this._mayWildcard(part, field) :
        this._may(part, field);
    });
  }

  toObject() {
    return {
      details: this._details,
      id: this._id,
      permissions: this._permissions,
      token: this._token
    };
  }

  _may(part, field) {
    return (this._permissions[part] &
      this._masks[part][field]) > 0;
  }

  _mayWildcard(part, field) {
    field = new RegExp(field.replace('*', '.*'));

    return Object.keys(this._masks[part]).some((key) => {
      if (field.test(key)) {
        return (this._permissions[part] &
          this._masks[part][key]) > 0;
      }

      return false;
    });
  }
}
