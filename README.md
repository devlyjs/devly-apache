# Introduction

Apache plugin for `@devly` cli manager built with redux and yargs.

# Installation

To add devly-apache plugin to your project, first make sure your project is set-up to consume Devly plugins (see https://github.com/aorinevo/devly-example#introduction).


Next, install `@devly/devly-apache`:

```bash
npm i @devly/devly-apache
```

# Integration

Use `addApacheConfig` action creator to update the apache state in the devly-store.  It is recommneded to place the initialState for apache in a `manifests/apache.js` file and requiring that file within the file that dispatches the action.

```js
// mainfests/apache.js

module.exports = {
  projectPath: '/etc/apache2',
  configBarrels: [
    {
      fileName: 'test-main.conf',
      content: 'some content',
      directory: 'other',
    },
  ],
  certificatesAndKeys: [
    {
      fileName: 'cert.crt',
      content: 'some cert 1',
      directory: 'cert',
    },
    {
      fileName: 'cert.key',
      content: 'some key 1',
      directory: 'cert',
    },
    {
      fileName: 'server.crt',
      content: 'some cert 2',
      directory: 'cert',
    },
    {
      fileName: 'server.key',
      content: 'some key 2',
      directory: 'cert',
    },
  ],
};
```

It is recommended that the consumer create a `plugins/index.js` barrel file for the devly plugins it consumes.

```js
// plugins/index.js

require('./apache.js');

// plugins/apache.js
const {store} = require('@devly/devly-store');
const {addApacheConfig, addApacheCommands} = require('@devly/devly-apache/actions');
const {dispatch} = store;

require('@devly/devly-apache');

dispatch(addApacheConfig(require('./manifests/apache')));

dispatch(addApacheCommands());
```
