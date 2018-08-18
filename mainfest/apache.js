const {
  proxyServer: {
    path: apacheRoot,
  },
} = require('../reapps-properties.json');
const fdsBarrel = require('../templates/apache/fds-main')(apacheRoot);

module.exports = {
  projectPath: `${apacheRoot}`,
  configBarrels: [
    {
      fileName: 'fds-main.conf',
      content: fdsBarrel,
      directory: 'other',
    },
  ],
  certificatesAndKeys: [
    {
      fileName: 'cert.crt',
      content: secureMCrt,
      directory: 'cert',
    },
    {
      fileName: 'cert.key',
      content: secureMKey,
      directory: 'cert',
    },
    {
      fileName: 'server.crt',
      content: snsNavAppCrt,
      directory: 'cert',
    },
    {
      fileName: 'server.key',
      content: snsNavAppKey,
      directory: 'cert',
    },
  ],
};
