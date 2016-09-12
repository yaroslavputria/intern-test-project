'use strict';
define(function () {
  function View(model) {
    this.model = model;
  }

  View.prototype.render = function (rootEl) {
    if (!rootEl) {
      rootEl = document.body;
    }

    var _this = this;
    var h1 = document.createElement('h1');
    h1.textContent = 'View works :)';
    rootEl.appendChild(h1);
    console.log('Render');

    var form = document.createElement('form');
    form.innerHTML = `
     <label> user name:<br>
    <input type = "text" id="userName">
    </label><br>
    <label> lang:<br>
    <select name="lang" id="lang">
    <option value="JSON">JSON</option> 
    <option value="JavaScript">JavaScript</option>
    <option value="Text">Text</option>
    <option value="Markdown">Markdown</option>
    </select>
    </label><br>
    <label> type:<br>
    <select name="type" id="type">
    <option value="application/json">application/json</option> 
    <option value="application/javascript">application/javascript</option>
    <option value="text/plain">text/plain</option>
    </select>
    </label><br>
   
    <button type="button" id="sendRequest">Send</button>`;
    rootEl.appendChild(form);

    var sendReq = rootEl.querySelector('#sendRequest');
    sendReq.addEventListener('click', function (e) {
      e.preventDefault();
      var userName = document.getElementById('userName');
      var type = document.getElementById('type');
      var lang = document.getElementById('lang');
      _this.model.getAllGists(userName.value)
      .then(function (gists) {
        console.log(gists);
        var filteredGists = _this.model.filterFiles(gists, type.value, lang.value);
        var fileNames = _this.model.filterByName(filteredGists);
        console.log(fileNames);
        _this.tmpAppendListOfName(fileNames, rootEl);
      });
    });
  };

  View.prototype.tmpAppendListOfName = function (list, rootEl) {
    var ul = document.createElement('ul');
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
