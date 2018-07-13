const pm2 = require('../index');
const API = pm2.custom;

test('Test promise', async () => {
  const methods = Object.keys(API.prototype);

  expect(methods).not.toHaveLength(0);

  Object.keys(API.prototype).forEach(name => {
    expect(typeof API.prototype[name]).toBe('function');
  });

  Object.keys(API.prototype).forEach(name => {
    expect(typeof pm2[name]).toBe('function');
  });

  await pm2.connect();
  const bus = await pm2.launchBus();
  expect(bus).toBeDefined();

  await pm2.close();
});

