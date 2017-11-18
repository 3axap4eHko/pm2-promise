const pm2 = require('pm2');
const API = pm2.custom;

test('Test prototype', () => {
  Object.keys(API.prototype).forEach(name => {
    expect(typeof API.prototype[name]).toBe('function');
  });
});

test('Test default', () => {
  Object.keys(API.prototype).forEach(name => {
    expect(typeof pm2[name]).toBe('function');
  });
});

