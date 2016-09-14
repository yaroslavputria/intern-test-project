'use strict';

define(function () {

  function View() {

  }

  View.prototype.render = function (data, rootElement) {
    console.log('Render');
    if (!rootElement) {
      rootElement = document.body;
    }

    rootElement.appendChild(data);
  };

  return View;
});
