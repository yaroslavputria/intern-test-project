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

  Model.prototype.filterFiles = function (array, type, language) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      for (var prop in array[i].files) {
        if (array[i].files.hasOwnProperty(prop)) {
          var property = array[i].files[prop];
          if ((!type || property.type === type) && (!language || property.language === language)) {
            result.push(property);
          }
        }
      }
    }

    return result;
  };

  Model.prototype.filterByName = function (arrOfFiles) {
    return arrOfFiles.map(function (file) {
      return file.filename;
    });
  };

  return Model;
}
);
