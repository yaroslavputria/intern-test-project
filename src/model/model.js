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

  // Model.prototype._filterGist = function (arrOfGists, arrOfFiles, func) {
  //   arrOfGists.forEach(function (gist) {
  //     for (var prop in gist.files) {
  //       if (gist.files.hasOwnProperty(prop)) {
  //         if (func(gist.files[prop])) {
  //           arrOfFiles.push(gist.files[prop]);
  //         }
  //       }
  //     }
  //   });
  // };

  // Model.prototype.filterFiles = function (arrOfGists, type, lang) {
  //   if (Array.isArray(arrOfGists)) {
  //     var arrOfFiles = [];
  //     if (type) {
  //       if (lang) {
  //         this._filterGist(arrOfGists, arrOfFiles, function (file) {
  //           return (file.type === type && file.language === lang);
  //         });
  //       } else {
  //         this._filterGist(arrOfGists, arrOfFiles, function (file) {
  //           return (file.type === type);
  //         });
  //       }
  //     } else {
  //       if (lang) {
  //         this._filterGist(arrOfGists, arrOfFiles, function (file) {
  //           return (file.language === lang);
  //         });
  //       } else {
  //         this._filterGist(arrOfGists, arrOfFiles, function (file) {
  //           return true;
  //         });
  //       }
  //     }

  //     return arrOfFiles;
  //   } else {
  //     throw new Error('wrong input data');
  //   }
  // };

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
