const { resolve } = require('path');

module.exports = function nuxtVueYandexMaps(options) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'st-yandex-maps.js',
    options,
    ssr: false,
  });
};

module.exports.meta = require('../package.json');
