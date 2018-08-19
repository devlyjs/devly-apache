const ADD_APACHE_CONFIG = 'ADD_APACHE_CONFIG';
const initialState = {};

function addApacheConfig(state, config){
  return {...state, ...config};
}

module.exports = function apacheReducer(state = initialState, action){
  switch (action.type) {
    case ADD_APACHE_CONFIG:
      return addApacheConfig(state, action.config);
    default:
      return state;
  }
}
