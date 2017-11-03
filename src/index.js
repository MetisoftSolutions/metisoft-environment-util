'use strict';

var ModuleExporter = require('metisoft-module-exporter').ModuleExporter;
var m = new ModuleExporter();



/** @module environmentUtil */



/**
 * This function attempts to retrieve the current environment's name.
 * If running tests (for instance, by invoking `mocha`), `'devtest'` will be selected
 * as the current environment. Otherwise, the current environment is taken from
 * the second argument handed in to `node`.
 *
 * For example, if you were to run `node server.js under-dev`, then this function would
 * return `'under-dev'`.
 *
 * @public
 * @memberof module:environmentUtil
 * @returns {String}
 *            Environment name if found. `''` otherwise.
 */
function getEnvName() {
  var envName = '';

  if (process.argv[1] && process.argv[1].toLowerCase().endsWith('mocha')) {
    envName = 'devtest';
  } else if (process.argv.length >= 3) {
    envName = process.argv[2];
  }

  return envName;
}
m.$$public(getEnvName);



module.exports = exports = m.$$getExports();