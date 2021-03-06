var currentSketch = 1;
var sketchCount = 21;

function pad(s, n) {
  var r = String(s);
  while (r.length < n) r = '0' + r;
  return r;
}

function sketchSrc() {
  return "sketches/sketch" + pad(currentSketch, 3) + ".js";
}

function tweakCanvas(c) {
  document.getElementById('sketchFrame').style.height = c.height + "px";
  document.getElementById('sketchFrame').style.width = c.width + "px";
}

function btn() {
  document.getElementById('btnFirst').disabled = currentSketch == 1;
  document.getElementById('btnPrev').disabled = currentSketch == 1;
  document.getElementById('btnCount').innerHTML = currentSketch + ' / ' + sketchCount;
  document.getElementById('btnNext').disabled = currentSketch == sketchCount;
  document.getElementById('btnLast').disabled = currentSketch == sketchCount;
  document.getElementById('sketchFrame').src = "sketch.html";
}

btn();
