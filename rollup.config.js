import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import path from 'path';
import multiEntry from 'rollup-plugin-multi-entry';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const replaceVersion = replace({
  include: 'src/js/version.js',
  delimiters: ['##', '##'],
  values: {
    VERSION: pkg.version
  }
});

const CWD = process.cwd();

function fixMobiledocImport() {
  return {
    name: 'fix-mobiledoc-import',
    resolveId(importee, importer) {
      if (importee === 'mobiledoc-kit') {
        return `${CWD}/src/js/index.js`;
      }
      if (importee.startsWith('mobiledoc-kit/')) {
        // console.log(importee, '<-', importer);
        importee = importee.replace('mobiledoc-kit/', '');
        importee = `${CWD}/src/js/${importee}.js`;
        // console.log('abs:', importee);
        let rel = path.relative(importer, importee);
        rel = path.resolve(importer, rel);
        // console.log('rel:', rel);
        return rel;
      } else {
        return null;
      }
    }
  };
}

export default [
  // browser-friendly UMD build
  {
    input: 'src/js/index.js',
    output: {
      name: 'Mobiledoc',
      file: 'dist/amd/mobiledoc-kit.js',
      format: 'amd',
      amd: {
        id: 'mobiledoc-kit'
      },
      exports: 'named',
      sourcemap: true
    },
    plugins: [
      replaceVersion,
      fixMobiledocImport(),
      resolve() // so Rollup can find `ms`
    ]
  },

  {
    input: 'src/js/index.js',
    output: {
      name: 'Mobiledoc',
      file: 'dist/global/mobiledoc-kit.js',
      format: 'iife',
      exports: 'named'
    },
    plugins: [
      replaceVersion,
      fixMobiledocImport(),
      resolve() // so Rollup can find `ms`
    ]
  },

  // CSS
  {
    input: 'src/css/mobiledoc-kit.css',
    output: {
      format: 'amd',
      file: 'dist/css/mobiledoc-kit.css'
    },
    plugins: [
      postcss({ extract: true }),

      // Put sourcemap in the correct place (Where Ember CLI expects and where
      // the previous Broccoli build put it).
      // Needs to run after the AMD build above is complete.
      // Should be able to define output.sourcemapFile instead but that is broken.
      copy({ 'dist/amd/mobiledoc-kit.js.map': 'dist/amd/mobiledoc-kit.map', verbose: true })
    ]
  },
  
  // TESTS
  {
    input: 'tests/**/*.js',
    output: {
      name: 'Mobiledoc',
      file: 'dist/rollup/tests/index.js',
      format: 'iife',
      exports: 'named',
      globals: {
        'mobiledoc-kit': 'Mobiledoc',
        'ember-cli/test-loader': 'TestLoader'
      }
    },
    plugins: [
      multiEntry(),
      replaceVersion,
      fixMobiledocImport(),
      resolve() // so Rollup can find `ms`
    ]
  }

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  // {
  //   input: 'src/js/index.js',
  //   external: ['mobiledoc-dom-renderer', 'mobiledoc-text-renderer'],
  //   output: [
  //     { file: pkg.main, format: 'cjs' },
  //     { file: pkg.module, format: 'es' }
  //   ]
  // }
];