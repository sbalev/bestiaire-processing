var currentSketch = 1;
var sketchCount = 6;

function sketchSrc() {
    var s = String(currentSketch);
    while (s.length < 3) s = '0' + s;
    return "sketches/sketch" + s + ".js";
}

function tweakCanvas(c) {
    document.getElementById('sketchFrame').style.height = (c.height + 30) + "px";
    c.canvas.style = "padding: 0; margin: auto; display: block; border-style: solid; border-width:thin;";
}

function btn() {
    document.getElementById('btnFirst').disabled = currentSketch == 1;
    document.getElementById('btnPrev').disabled = currentSketch == 1;
    document.getElementById('btnNext').disabled = currentSketch == sketchCount;
    document.getElementById('btnLast').disabled = currentSketch == sketchCount;
    document.getElementById('sketchFrame').src = "sketch.html";
}
