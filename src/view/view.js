'use strict';
define(function () {
  function View(model) {
    this.model = model;
  }

  View.prototype._appendListItems = function (list, itemNames) {
    var tmpItem = document.createElement('option');
    list.appendChild(tmpItem);
    itemNames.forEach(function (itemName) {
      tmpItem = document.createElement('option');
      tmpItem.textContent = itemName;
      tmpItem.value = itemName;
      list.appendChild(tmpItem);
    });
  };

  View.prototype._renderForm = function (arrLangs, arrTypes, rootEl) {
    var form = document.createElement('form');
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'userName';
    form.appendChild(nameInput);

    var selLangs = document.createElement('select');
    selLangs.id = 'lang';
    this._appendListItems(selLangs, arrLangs);
    form.appendChild(selLangs);

    var selTypes = document.createElement('select');
    selTypes.id = 'type';
    this._appendListItems(selTypes, arrTypes);
    form.appendChild(selTypes);

    var btn = document.createElement('button');
    btn.textContent = 'Send';
    btn.id = 'sendRequest';
    form.appendChild(btn);

    rootEl.appendChild(form);
  };

  View.prototype._addProcessingListener = function (btnId, rootEl, _this) {
    var sendReq = rootEl.querySelector(btnId);
    sendReq.addEventListener('click', function (e) {
      e.preventDefault();
      var userName = document.getElementById('userName');
      var type = document.getElementById('type');
      var lang = document.getElementById('lang');
      _this.model.getAllGists(userName.value)
      .then(function (gists) {
        var filteredGists = _this.model.filterFiles(gists, type.value, lang.value);
        var fileNames = _this.model.filterByName(filteredGists);
        _this.tmpAppendListOfName(fileNames, rootEl);
      });
    });
  };

  View.prototype.render = function (rootEl) {
    var arrLangs = ['JSON', 'JavaScript', 'Text', 'Markdown'];
    var arrTypes = ['application/json', 'application/javascript', 'text/plain'];
    if (!rootEl) {
      rootEl = document.body;
    }

    this._renderForm(arrLangs, arrTypes, rootEl);
    this._addProcessingListener('#sendRequest', rootEl, this);
    console.log('Render');
  };

  View.prototype.tmpAppendListOfName = function (list, rootEl) {
    var ul = document.createElement('ul');
    var prevUl = rootEl.querySelector('#listOfFiles');
    if (prevUl) {
      prevUl.remove();
    }

    ul.id = 'listOfFiles';
    list.map(function (item) {
      var tmpLi = document.createElement('li');
      tmpLi.textContent = item;
      ul.appendChild(tmpLi);
    });

    rootEl.appendChild(ul);
  };

  return View;
});
