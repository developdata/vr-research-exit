let log = null;
window.onload = ()=> {

const ctlL = document.getElementById("ctlL");
const ctlR = document.getElementById("ctlR");
const txt = document.getElementById("txt");

log = function (v) {
  txt.setAttribute("value", v);
}

ctlL.addEventListener("ybuttondown", function(event) {
  log("y button pressed!");
});
ctlR.addEventListener("abuttondown", function(event) {
  log("a button pressed!");
});
ctlR.addEventListener("bbuttondown", function(event) {
  log("b button pressed!");
});
  
}

AFRAME.registerComponent("x-button-listener", {
  init: function() {

    this.el.addEventListener("xbuttondown", function(evt) {
      log("x button pressed!");
    });
  }
});
