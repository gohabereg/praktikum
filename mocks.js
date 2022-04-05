const { JSDOM } = require('jsdom');

const window = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost'
});

global.window = window;
global.document = window.document;