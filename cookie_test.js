const Cookie = require('./cookie');

const cookieAPI = Cookie.cookieAPI;
const cookie = Cookie.cookie;

const expect = require('chai').expect;

describe('cookieAPI test function', () => {
  it('when name is username', () => {
    const name = 'username';
    expect(cookieAPI.get(name)).to.be.equal('zimo')
  });

  it('when name is undefined', () => {
    let name;
    expect(cookieAPI.get(name)).to.be.equal(false);
  });
});

describe('Cookie object isPlainObject test', () => {
  it('when object is {}', () => {
    const object = {};
    expect(cookie.isPlainObject(object)).to.be.equal(true);
  })

  it('when object is new Object', () => {
    const object = new Object();
    expect(cookie.isPlainObject(object)).to.be.equal(true);
  })

  it('when object to change the toString function', () => {
    const object = new Object();
    Object.toString = function (object) {
      return 'object';
    };
    expect(cookie.isPlainObject(object)).to.be.equal(true);
  })
})

describe('CookieAPI set function test', () => {
  it('when name is object', () => {
    const name = {
      username: 'zimo',
      age: 21,
    };
    expect(cookieAPI.set(name, 1)).to.be.equal('username=zimo;age=21')
  })
})



