# Introduction

Apache plugin for `@lantis` cli manager built with redux and yargs.

# Installation

Install `redux`, `yargs`, and `@lantis/lantis-apache` in your project.

```bash
npm i redux yargs @lantis/lantis-apache
```

# Set-up

All lantis plugins assume that the consumer has the following directory structure somewhere in their working directory:
```
 ├── cli.js
 ├── actions
 ├── reducers
 └── store.js
```

`reducers/index.js` is where you add the plugins' reducers

```
const { combineReducers } = require('redux');
const apacheReducer = require('@lantis/lantis-apache/reducers');

module.exports = combineReducers({
  apache: apacheReducer
});
```

`store.js`

```
const {createStore} = require('redux');
const rootReducer = require('./reducers');

const store = createStore(rootReducer);

module.exports = store
```

`cli.js`

```
const store = require('../scripts/reapps/store');
const yargs = require('yargs');
const {addApacheConfig, addApacheCommands} = require('@lantis/lantis-apache/actions');
const Apache = require('@lantis/lantis-apache/scripts/apache');

store.dispatch(addApacheConfig(require('../manifests/apache')));
store.dispatch(addApacheCommands(yargs, new Apache(store)));

module.exports = yargs;
```
