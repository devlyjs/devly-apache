const winston = require('winston');
const { ADD_APACHE_CONFIG, ADD_APACHE_COMMANDS, UPDATE_HTTPD_VHOSTS } = require('../actions');
const initialState = {};
winston.cli();

function addApacheConfig(state, config){
  return {...state, ...config};
}

function addApacheCommands(state, yargs){
  yargs.command('apache init','Init file, app, or machine',
    {
      force: {
        alias: 'f',
        default: false,
      },
    },
    function handler(argv) {
      winston.log('info','Initializing Proxy Server!');
      // apache.init(argv.force);
    }
  );
  return state;
}

function updateHttpdVhosts(force, ports, vHost, fileName, directoryPath){

  return state;
}

module.exports = function apacheReducer(state = initialState, action){
  console.log('apacheReducer outside of switch statement : ', action);
  switch (action.type) {
    case ADD_APACHE_CONFIG:
      return addApacheConfig(state, action.config);
    case ADD_APACHE_COMMANDS:
      console.log('add command reducer: ');
      return addApacheCommands(state, action.yargs, action.apache);
    case UPDATE_HTTPD_VHOSTS:
      return updateHttpdVhosts(state, action.force, action.vHost, action.fileName, action.directoryPath);
    default:
      return state;
  }
}
