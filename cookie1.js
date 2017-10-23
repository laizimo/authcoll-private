const cookie = function () {
  const document_cookie = "username=zimo; password=123456;domain=http://www.lhbzimo.cn;secure";
  var Cookie = {
    cookieAPI : {
      get: function (name) {
        const nameEQ = name + '=';
        const c_arr = document_cookie.split(';');
        for(let item of c_arr){
          item = item.replace(/^\s*/g, '');
          if(item.indexOf(nameEQ) === 0){
            return item.substring(nameEQ.length, item.length);
          }
        }
        return false;
      }
    }
  }

  return Cookie;
}

module.exports = cookie;