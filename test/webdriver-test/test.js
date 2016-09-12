var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Webdriver tests:', function () {
  this.timeout(180000);
  it('must be 5 files with chosen criteria', function () {
    browser.url('http://localhost:8081');
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

