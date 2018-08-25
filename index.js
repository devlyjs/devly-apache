const {store, reducerRegistry} = require('@devly/devly-store');

reducerRegistry.register('apache', require('./reducers'));
