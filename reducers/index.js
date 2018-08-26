const winston = require('winston');
const { ADD_APACHE_CONFIG, ADD_APACHE_COMMANDS, UPDATE_HTTPD_VHOSTS } = require('../actions');
const yargs = require('@devly/devly-cli');
const Apache = require('../scripts/apache');
const apache = new Apache();
const initialState = {};
winston.cli();

function addApacheConfig(state, config){
  return {...state, ...config};
}

function addApacheCommands(state){
  yargs.command('apache init','Init file, app, or machine',
    {
      force: {
        alias: 'f',
        default: false,
      },
    },
    function handler(argv) {
      winston.log('info','Initializing Proxy Server!');
      apache.init(argv.force);
    }
  );
  return state;
}

function updateHttpdVhosts(force, ports, vHost, fileName, directoryPath){

  return state;
}

module.exports = function apacheReducer(state = initialState, action){
  switch (action.type) {
    case ADD_APACHE_CONFIG:
      return addApacheConfig(state, action.config);
    case ADD_APACHE_COMMANDS:
      return addApacheCommands(state);
    case UPDATE_HTTPD_VHOSTS:
      return updateHttpdVhosts(state);
    default:
      return state;
  }
}
