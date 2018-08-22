const {store, reducerRegistry} = require('@lantis/lantis-store');

reducerRegistry.register('apache', require('./reducers'));
