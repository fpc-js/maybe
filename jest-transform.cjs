const { transformSync } = require('@babel/core');
const { dirname, join } = require('path');
const { existsSync } = require('fs');

const locatePackageJson = path =>
  existsSync(join(path, 'package.json'))
    ? path
    : locatePackageJson(dirname(path));

module.exports.process = (src, filename, config, _transformOptions) => {
  let rootDir;

  if (filename.match(/^.+\/node_modules\//)) {
    rootDir = locatePackageJson(dirname(filename));
  }

  if (!rootDir) {
    rootDir = config.cwd;
  }

  return transformSync(src, {
    root: rootDir,
    filename,
  });
};
