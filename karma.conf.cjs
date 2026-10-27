module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('@chiragrupani/karma-chromium-edge-launcher'),
      require('karma-esbuild'),
      require('karma-coverage')
    ],
    files: [
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/**/*.test.js': ['esbuild']
    },
    reporters: ['progress', 'coverage'],
    browsers: ['EdgeHeadless'],
    singleRun: true,
    esbuild: {
      jsx: 'automatic',
      loader: { '.js': 'jsx' },
      singleBundle: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};