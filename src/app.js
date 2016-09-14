'use strict';

var ROOT_EL = document.body;
require(['./src/model/model.js', './src/view/form.js', './src/view/results.js'],
function (Model, Form, View) {
  var model = new Model();

  var form = new Form({
    arrOfLangs: ['', 'JSON', 'JavaScript', 'Text', 'Markdown'],
    arrOfTypes: ['', 'application/json', 'application/javascript', 'text/plain'],
    rootEl: ROOT_EL,
  });

  var view = new View();

  form.addProcessingListener(function (filterCriterias) {
    model.getFileNamesPromise(filterCriterias).then(function (files) {
      view.createResultList(files, ROOT_EL);
    });
  });
});
