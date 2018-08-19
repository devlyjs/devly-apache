const winston = require('winston');
const { ADD_APACHE_CONFIG, ADD_APACHE_COMMANDS } = require('../actions');
const initialState = {};

function addApacheConfig(state, config){
  return {...state, ...config};
}

function addApacheCommands(state, yargs, apache){
  yargs.command('apache init','Init file, app, or machine',
    {
      force: {
        alias: 'f',
        default: false,
      },
    },
    function handler(argv) {
      winston.log('Initializing Proxy Server!');
      apache.init(argv.force);
    }
  );
  return state;
}

module.exports = function apacheReducer(state = initialState, action){
  switch (action.type) {
    case ADD_APACHE_CONFIG:
      return addApacheConfig(state, action.config);
    case ADD_APACHE_COMMANDS:
      return addApacheCommands(state, action.yargs, action.apache);
    default:
      return state;
  }
}
