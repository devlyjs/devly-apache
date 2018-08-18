module.exports = require('@aorinevo/yargs')
  .strict()
  .middleware([coremetrics])
  .commandDir('cmds')
  .help()
  .options({
    force: {
      alias: 'f',
      describe: 'overwrite existing file',
    },
    help: {
      alias: 'h',
      describe: 'help',
    },
  }).argv;
