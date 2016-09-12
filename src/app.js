'use strict';
SystemJS.import('src/model/model.js').then(function (Model) {
  var model = new Model();
  model.init();
  SystemJS.import('src/view/view.js').then(function (View) {
    var view = new View(model);
    view.render();

  });

});
