// Use higher order reducers here

const ADD_APACHE_CONFIG = 'ADD_APACHE_CONFIG';
const ADD_APACHE_COMMANDS = 'ADD_APACHE_COMMANDS';

function addApacheConfig (config) {
  return {
    type: ADD_APACHE_CONFIG,
    config
  }
}

function addApacheCommands (yargs) {
  return {
    type: ADD_APACHE_COMMANDS,
    yargs
  }
}


module.exports = {
  addApacheConfig,
  addApacheCommands,
  ADD_APACHE_CONFIG,
  ADD_APACHE_COMMANDS
}
