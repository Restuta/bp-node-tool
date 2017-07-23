/* eslint-disable*/
//eslint is disabled to preserve babel config formatting that is easier to copy-paste from .babelrc

require('babel-register')({
  //see https://babeljs.io/docs/usage/options/#options for more config options
  babelrc: false,
  presets: [
    [
      'env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    'stage-2',
  ]
})
require('babel-polyfill')
require('./lib/index')
