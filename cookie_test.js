const Cookie = require('./cookie1');

const cookie = Cookie();

const expect = require('chai').expect;

describe('cookieAPI test', () => {
  it('function get test', () => {
    expect(cookie.cookieAPI.get('username')).to.be.equal('zimo')
  });

  it('function get test', () => {
    expect(cookie.cookieAPI.get('')).to.be.equal(false);
  })
})

