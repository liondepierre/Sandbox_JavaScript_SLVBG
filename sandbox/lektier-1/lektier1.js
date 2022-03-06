var litl = {
  init: function () {
    var litlDiv = document.getElementById("myList");

    var listItems = litlDiv.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
      var li = listItems[i];
      var text = li.firstChild.nodeValue;
      // var text = li.textContent;

      if (text.startsWith("http://")) {
        var linkElement = litl.createALink(text, text);

        li.replaceChild(linkElement, li.firstChild);
      }
    }
  },

  createALink: function (text, link) {
    var textElement = document.createTextNode(text);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", link);
    linkElement.appendChild(textElement);

    return linkElement;
  },
};

window.addEventListener("load", litl.init);

//http://www.fkj.dk/datamatiker/f19_web/opgaver.html