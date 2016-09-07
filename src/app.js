'use strict';
SystemJS.import('src/model/model.js').then(function (Model) {
  var model = new Model();
  model.init();
  SystemJS.import('src/view/view.js').then(function (View) {
    var view = new View();
    view.render(model);
    var sendReq = document.getElementById('sendRequest');
    sendReq.addEventListener('click', function (e) {
      e.preventDefault();
      var userName = document.getElementById('userName');
      var type = document.getElementById('type');
      var lang = document.getElementById('lang');
      model.getAllGists(userName.value)
      .then(function (gists) {
        console.log(gists);
        var filteredGists = model.filterFiles(gists, type.value, lang.value);
        var fileNames = model.filterByName(filteredGists);
        console.log(fileNames);
        view.tmpAppendListOfName(fileNames);
      });
    });

  });

});
