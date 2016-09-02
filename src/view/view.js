'use strict';
define(function () {
  function View() {

  }

  View.prototype.render = function () {
    var h1 = document.createElement('h1');
    h1.textContent = 'View works :)';
    document.body.appendChild(h1);
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
    document.body.appendChild(form);
  };

  View.prototype.tmpAppendListOfName = function (list) {
    var ul = document.createElement('ul');
    ul.id = 'listOfFiles';
    list.map(function (item) {
      var tmpLi = document.createElement('li');
      tmpLi.textContent = item;
      ul.appendChild(tmpLi);
    });

    document.body.appendChild(ul);
  };

  return View;
});
