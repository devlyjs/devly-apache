const fs = require('fs');
const props = require('../../../reapps-properties.json');
const winston = require('winston');
const shell = require('shelljs');
const { spawnSync } = require('child_process');
const { certificatesAndKeys, configBarrels } = require('../../../manifests/apache');

function updateCertOrKey(fileContent, pathToWrite, fileName, force) {
  if (!fs.existsSync(pathToWrite)) {
    spawnSync(`sudo mkdir ${pathToWrite}`, [], {
      shell: true,
      stdio: 'inherit',
    });
  }
  if (!fs.existsSync(`${pathToWrite}/${fileName}`) || force) {
    fs.writeFileSync(`./${fileName}`, fileContent, 'utf8');
    spawnSync(`sudo mv ./${fileName} ${pathToWrite}/${fileName}`, [], {
      shell: true,
      stdio: 'inherit',
    });
    winston.log('info', `${fileName} file created in ${pathToWrite}`);
    return true;
  }
  winston.log('info', `${pathToWrite}/${fileName} already exists.`);
  winston.log('info', 'To overwrite file(s), use --force');
  return new Error('file already exists');
}

function updateBarrelFile(force) {
  for (const item of configBarrels) { // eslint-disable-line no-restricted-syntax
    updateCertOrKey(item.content, `${props.proxyServer.path}/${item.directory}`, item.fileName, force);
  }
}

function updateCertificatesAndKeys(force) {
  for (const item of certificatesAndKeys) { // eslint-disable-line no-restricted-syntax
    updateCertOrKey(item.content, `${props.proxyServer.path}/${item.directory}`, item.fileName, force);
  }
}

function updateHttpdVhosts(force, ports, template, filename, directory = `${props.proxyServer.path}/fds`) {
  if (!fs.existsSync(`${directory}`) || force) {
    spawnSync(`sudo mkdir ${directory}`, [], {
      shell: true,
    });
    winston.log('info', `created ${directory} directory`);
  } else {
    winston.log('info', `${directory} directory already exists.`);
  }

  if (!fs.existsSync(`${directory}/${filename}`) || force) {
    fs.writeFileSync(`./${filename}`, template, 'utf8');
    shell.exec(`sudo mv ./${filename} ${directory}/${filename}`);
    winston.log('info', `created ${directory}/${filename}`);
    updateBarrelFile(force);
  } else {
    winston.log('info', `${directory}/${filename} already exists. To replace this file, run with --force`);
    throw new Error('file already exists');
  }
}

function initProxyServer(force) {
  updateCertificatesAndKeys(force);
  updateBarrelFile(force);
  spawnSync('sudo apachectl restart', [], {
    shell: true,
  });
  winston.log('info', 'restarted apache');
  return true;
}

module.exports = {
  update: {
    httpdVhosts: updateHttpdVhosts,
  },
  init: initProxyServer,
};
