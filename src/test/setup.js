import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
const { JSDOM } = jsdom;

const { document } = (new JSDOM('<!doctype html><html><body></body></html>',{
  url: "http://localhost"
})).window;
global.doc = document;
const win = doc.defaultView;

global.document = document;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);