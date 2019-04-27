const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

module.exports = {
  ROOT_DIR,
  SRC_DIR,
  DIST_DIR,
};
