var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Webdriver tests:', function () {
  this.timeout(180000);
  it('must be 5 files with chosen criteria', function () {
    browser.url('http://localhost:8081');
    browser.waitForExist('#username');
    browser.setValue('#username', 'my8bit');
    browser.selectByAttribute('#type', 'value', 'text/plain');
    browser.selectByAttribute('#lang', 'value', 'Markdown');
    browser.click('#find');
    browser.waitForExist('#list');
    var lis = browser.elements('#list li');
    console.log(lis);
    lis.value.length.should.be.equal(5);
  });
});

