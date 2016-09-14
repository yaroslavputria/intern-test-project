'use strict';

define(['./view.js'], function (View) {

  function Files() {

  }

  Files.prototype = Object.create(View.prototype);
  Files.prototype.constructor = Files;

  Files.prototype.createResultList = function (fileNames, rootEl) {
    var prevResult = document.getElementById('list');
    var rootElement = rootEl || document.body;
    var list = document.createElement('ul');
    if (prevResult) {
      prevResult.remove();
    }

    list.id = 'list';
    for (var i = 0; i < fileNames.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerHTML = fileNames[i];
      list.appendChild(newLi);
    }

    this.render(list, rootElement);

  };

  return Files;
});
