var chai = require('chai');
//var webdriverio = require('webdriverio');
//var con = require('../../wdio.conf.js').config;
global.expect = chai.expect;
chai.Should();
//global.browser = webdriverio.remote(con).init();
describe('Webdriver tests:', function () {
  it('must be 5 files with chosen criteria', function () {
    browser.url('http://localhost:8080');
    browser.waitForExist('#userName');
      browser.setValue('#userName', 'my8bit');
      browser.selectByAttribute('#type', 'value', 'text/plain');
      browser.selectByAttribute('#lang', 'value', 'Markdown');
      browser.click('#sendRequest');
      browser.waitForExist('#listOfFiles');
        var lis = browser.elements('#listOfFiles li');
        console.log(lis);
        lis.value.length.should.be.equal(5);
     
   
  });
});

