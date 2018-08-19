const ADD_APACHE_CONFIG = 'ADD_APACHE_CONFIG';

function addApacheConfig (config) {
  return {
    type: ADD_APACHE_CONFIG,
    config
  }
}


module.exports = {
  addApacheConfig,
  ADD_APACHE_CONFIG
}
