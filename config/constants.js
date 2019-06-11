const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const ASSETS_ROOT = path.join(ROOT_DIR, 'assets');
const ASSETS_DIST = path.join(ASSETS_ROOT, 'dist');

module.exports = {
  ROOT_DIR,
  SRC_DIR,
  DIST_DIR,
  DOCS_DIR,
  ASSETS_ROOT,
  ASSETS_DIST,
};
