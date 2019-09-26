require('./URL.mock');
require('./ImageData.mock');
const { createLocalVue } = require('@vue/test-utils');
const { existsSync } = require('fs');
const packageJson = require('../../package.json');
const components = require('@/components');

/** @type {Array} A list of components keys in source */
const componentNames = Object.keys(components);

/**
 * Test a given type of build for its exports values
 *
 * @param  {String} type The type of the build to test: common, umd, umd.min
 * @return {void}
 */
function testBuild(type = 'common') {
  const {
    default: VueMapboxGl,
    ...exportedComponents
  } = require(`../../dist/VueMapboxGl.${type}.js`);

  const localVue = createLocalVue();
  localVue.use(VueMapboxGl);

  const installedNames = Object.keys(localVue.options.components);
  const exportedNames = Object.keys(exportedComponents);

  componentNames.forEach(name => {
    describe(`Testing "${name}" component installation and export...`, () => {
      it(`Component "${name}" has been installed.`, () => {
        expect(installedNames).toContain(name);
      });

      it(`Component "${name}" is exported.`, () => {
        expect(exportedNames).toContain(name);
      });
    });
  });
}

/**
 * Test if the file path in the given package.json key is valid
 *
 * @param  {String} type The property to test: main, module, unpkg
 * @return {void}
 */
function testFileExists(type = 'main') {
  it(`The "${type}" field should refer to an existing file.`, () => {
    const fileExists = existsSync(packageJson[type]);
    expect(fileExists).toBe(true);
  });
}

// Init tests
describe('Testing package.json files reference', () => {
  testFileExists('main');
  testFileExists('module');
  testFileExists('unpkg');
});

describe('Testing build exports', () => {
  describe('Common JS build', () => {
    testBuild('common');
  });
  describe('UMD build', () => {
    testBuild('umd');
  });
  describe('Compressed UMD build', () => {
    testBuild('umd.min');
  });
});
