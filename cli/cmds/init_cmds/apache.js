const apache = require('../../../scripts/apache/apache');
const winston = require('winston');


exports.command = 'apache [f]';
exports.desc = 'Initializes apache.  Use [f] to overwrite file(s)';
exports.builder = {
  force: {
    alias: 'f',
    default: false,
  },
};
exports.handler = function handler(argv) {
  winston.log('Initializing Proxy Server!');
  apache.init(argv.force);
};
