document.addEventListener('DOMContentLoaded', function () {

  var switchButton = document.querySelector('button');
  var bodyElement = document.querySelector('body');

  switchButton.addEventListener('click', function(){

    var switchCurrentClass = switchButton.getAttribute('class');
    var bodyClass = bodyElement.getAttribute('class');
    var docH1 = document.querySelector('h1');

    if (switchCurrentClass === 'switch on'){
      switchButton.setAttribute('class', 'switch off');
      docH1.innerText = "Hey, who turned off the lights?";
    } else {
      switchButton.setAttribute('class', 'switch on');
      docH1.innerText = "It's so bright in here!";
    }

    if (bodyClass === 'light'){
      bodyElement.setAttribute('class', 'dark');
    } else {
      bodyElement.setAttribute('class', 'light');
    }

  });

});
