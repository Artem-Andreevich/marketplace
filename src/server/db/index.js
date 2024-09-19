const data = require('./db.json');

module.exports = () => ({
  categoty: data.categories,
  iphone: data.iphone,
  ipad: data.ipad,
});