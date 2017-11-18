const API = require('pm2').custom;

Object.keys(API.prototype).forEach(name => {

  const method = API.prototype[name];
  // Check if this method is public function
  if (/^[a-zA-Z]+$/.test(name) && typeof method === 'function') {

    API.prototype[name] = function (...args) {
      // If last argument is function then we have callback
      if (typeof args[args.length - 1] === 'function') {
        return method.apply(this, args);
      } else {
        return new Promise((resolve, reject) => {
          args.push((error, value) => {
            if (error) {
              reject(error);
            } else {
              resolve(value);
            }
          });
        });
      }
    };
  }
});

module.exports = new API;
module.exports.custom = API;
