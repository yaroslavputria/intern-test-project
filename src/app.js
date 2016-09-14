'use strict';

var ROOT_EL = document.body;

var Model = require('./model/model.js');
var model = new Model();

var Form = require('./view/form.js');
var form = new Form({
  arrOfLangs: ['', 'JSON', 'JavaScript', 'Text', 'Markdown'],
  arrOfTypes: ['', 'application/json', 'application/javascript', 'text/plain'],
  rootEl: ROOT_EL,
});

var View = require('./view/results.js');
var view = new View();

form.addProcessingListener(function (filterCriterias) {
  model.getFileNamesPromise(filterCriterias).then(function (files) {
    view.createResultList(files, ROOT_EL);
  });
});
