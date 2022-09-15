// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  const baseConfig = require('../karma.conf');
  baseConfig(config);
  config.coverageReporter.dir = require('path').join(__dirname, '../../../coverage/my-lib_secondary');
};
