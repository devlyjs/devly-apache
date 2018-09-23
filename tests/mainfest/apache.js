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
