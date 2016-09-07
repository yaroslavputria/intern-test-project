var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Webdriver tests:', function () {
  var os = require('os');
  var networkInterfaces = os.networkInterfaces();
  console.log('IP IS');
  console.log( networkInterfaces );
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

