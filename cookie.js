const document = {
  cookie: 'username=zimo; password=123456;secure'
};

const cookie = function () {
  var Cookie = {
    cookieAPI : {
      get: function (name) {
        const nameEQ = name + '=';
        const c_arr = document.cookie.split(';');
        for (let item of c_arr) {
          item = item.replace(/^\s*/g, '');
          if (item.indexOf(nameEQ) === 0) {
            return item.substring(nameEQ.length, item.length);
          }
        }
        return false;
      },

      set: function (name, value, options) {
        const _self = this;
        if (Cookie.isPlainObject(name)) {
          for (let key in name) {
            if(name.hasOwnProperty(key)) _self.set(key, name[key], value);
          }
        } else {
          const opt = Cookie.isPlainObject(options) ? options : {expires: options},
            expires = opt.expires || '',
            expiresType = typeof(expires),
            path = `;path=${opt.path || '/'}`,
            domain = `;domain=${opt.domain || ''}`,
            secure = opt.secure ? ';secure' : '';

          if(expires)
        }
      }
    },

    isPlainObject: function (obj) {
      return !!obj && Object.prototype.toString.call(obj) === '[object Object]';
    }
  };

  return {
    cookie: Cookie,
    cookieAPI: Cookie.cookieAPI
  }
}

module.exports = {
  cookieAPI: cookie().cookieAPI,
  cookie: cookie().cookie
};