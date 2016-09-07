var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Webdriver tests:', function () {
  this.timeout(59000);
  beforeEach('open url', function () {
    browser.url('http://localhost:8080');
  });
  it('must be 5 files with chosen criteria', function () {
   
    console.log(browser.element('h1'));
    //var n;
    // do {
    //     n = browser.element('#userName');
    // } while (!n);
    browser.pause(5000);
    browser.waitForExist('#userName');


    console.log("!!!!!!!!!!!!!!!!!!!!!!");
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

