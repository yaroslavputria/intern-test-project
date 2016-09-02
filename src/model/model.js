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
    .then(res => res.json());
  };

  Model.prototype.filterFiles = function (arrOfGists, type, lang) {
    if ({}.toString.call(arrOfGists).slice(8, -1) === 'Array') {
      var arrOfFiles = [];
      if (type) {
        if (lang) {
          arrOfGists.forEach(function (gist) {
            for (var prop in gist.files) {
              if (gist.files.hasOwnProperty(prop)) {
                if (gist.files[prop].type === type && gist.files[prop].language === lang) {
                  arrOfFiles.push(gist.files[prop]);
                }
              }
            }
          });
        } else {
          arrOfGists.forEach(function (gist) {
            for (var prop in gist.files) {
              if (gist.files.hasOwnProperty(prop)) {
                if (gist.files[prop].type === type) {
                  arrOfFiles.push(gist.files[prop]);
                }
              }
            }
          });
        }
      } else {
        if (lang) {
          arrOfGists.forEach(function (gist) {
            for (var prop in gist.files) {
              if (gist.files.hasOwnProperty(prop)) {
                if (gist.files[prop].language === lang) {
                  arrOfFiles.push(gist.files[prop]);
                }
              }
            }
          });
        } else {
          arrOfGists.forEach(function (gist) {
            for (var prop in gist.files) {
              if (gist.files.hasOwnProperty(prop)) {
                arrOfFiles.push(gist.files[prop]);
              }
            }
          });
        }
      }

      return arrOfFiles;
    } else {
      throw new Error('wrong input data');
    }
  };

  Model.prototype.filterByName = function (arrOfFiles) {
    return arrOfFiles.map(file => file.filename);
  };

  return Model;
}
);
