'use strict';
define(function () {
  function Model() {

  }

  Model.prototype.init = function () {
    console.log('Inited');
  };

  Model.prototype.getAllGists = function (name) {
    return fetch('https://api.github.com/users/' + name + '/gists', {
      method: 'GET',
      mode: 'cors',
    })
    .then(function (res) {
      return res.json();
    });
  };

  Model.prototype.filterFiles = function (gists, type, language) {
    var arrOfFiles = [];
    for (var i = 0; i < gists.length; i++) {
      for (var prop in gists[i].files) {
        if (gists[i].files.hasOwnProperty(prop)) {
          var property = gists[i].files[prop];
          if ((!type || property.type === type) && (!language || property.language === language)) {
            arrOfFiles.push(property);
          }
        }
      }
    }

    return arrOfFiles;
  };

  Model.prototype.filterByName = function (arrOfFiles) {
    return arrOfFiles.map(function (file) {
      return file.filename;
    });
  };

  Model.prototype.getFileNamesPromise = function (criteriaObj) {
    return this.getAllGists(criteriaObj.userName)
    .then(function (gists) {
      var filteredGists = this.filterFiles(gists, criteriaObj.type, criteriaObj.lang);
      return this.filterByName(filteredGists);
    }.bind(this));
  };

  return Model;
}
);
