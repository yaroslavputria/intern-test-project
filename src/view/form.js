'use strict';

define(['./view.js'], function (View) {

  function Form(formConfig) {
    var arrOfLangs = formConfig.arrOfLangs;
    var arrOfTypes = formConfig.arrOfTypes;
    var rootElement = formConfig.rootEl || document.body;
    var form = document.createElement('form');
    var userLabel = document.createElement('label');
    var langLabel = document.createElement('label');
    var typeLabel = document.createElement('label');
    var userInput = document.createElement('input');
    var langSelect = document.createElement('select');
    var typeSelect = document.createElement('select');
    var btn = document.createElement('button');

    userLabel.setAttribute('for', 'username');
    userLabel.innerHTML = 'Username';
    userInput.id = 'username';
    userInput.name = 'username';
    userInput.type = 'text';
    userLabel.appendChild(userInput);
    form.appendChild(userLabel);

    langLabel.setAttribute('for', 'language');
    langLabel.innerHTML = 'Language';
    langSelect.id = 'lang';
    this._createOptionsList(langSelect, arrOfLangs);
    langLabel.appendChild(langSelect);
    form.appendChild(langLabel);

    typeLabel.setAttribute('for', 'type');
    typeLabel.innerHTML = 'Type';
    typeSelect.id = 'type';
    this._createOptionsList(typeSelect, arrOfTypes);
    typeLabel.appendChild(typeSelect);
    form.appendChild(typeLabel);

    btn.textContent = 'Find';
    btn.id = 'find';
    form.appendChild(btn);

    this.render(form, rootElement);
  }

  Form.prototype = Object.create(View.prototype);
  Form.prototype.constructor = Form;

  Form.prototype._createOptionsList = function (selectElement, options) {
    options.forEach(function (fileOption) {
      var option = document.createElement('option');
      option.innerHTML = option.value = fileOption;
      selectElement.appendChild(option);
    });

    return selectElement;
  };

  Form.prototype.addProcessingListener = function (processing) {
    var button = document.getElementById('find');
    button.addEventListener('click', function (el) {
      el.preventDefault();
      var filterCriterias = {
        userName: document.getElementById('username').value,
        type: document.getElementById('type').value,
        lang: document.getElementById('lang').value,
      };
      processing(filterCriterias);
    });
  };

  return Form;
});
