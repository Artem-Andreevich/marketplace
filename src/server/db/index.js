const data = require('./db.json');

module.exports = () => ({
  iphone: data.iphone,
  ipad: data.ipad,
});