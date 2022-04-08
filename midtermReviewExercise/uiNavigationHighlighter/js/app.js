let sc = document.getElementById("sc");
let pencil = document.getElementById("pencil");
let pen = document.getElementById("pen");
let notebook = document.getElementById("notebook");
let backpack = document.getElementById("backpack");
let highlighter = document.getElementById("highlighter");
let ruler = document.getElementById("ruler");

pencil.innerHTML = "PENCIL";
pencil.style.fontSize = "20px";
pencil.style.backgroundColor = "#2d5441";
pencil.style.padding = "2px 6px"

pen.innerHTML = "PEN";
pen.style.fontSize = "20px";
pen.style.backgroundColor = "#0d4291";
pen.style.padding = "2px 6px"

notebook.innerHTML = "NOTEBOOK";
notebook.style.fontSize = "20px";
notebook.style.backgroundColor = "#9751c9";
notebook.style.padding = "2px 6px"

backpack.innerHTML = "BACKPACK";
backpack.style.fontSize = "20px";
backpack.style.backgroundColor = "#ab2229";
backpack.style.padding = "2px 6px"


highlighter.innerHTML = "HIGHLIGHTER";
highlighter.style.fontSize = "20px";
highlighter.style.backgroundColor = "#c97e3c";
highlighter.style.padding = "2px 6px"

ruler.innerHTML = "RULER";
ruler.style.fontSize = "20px";
ruler.style.backgroundColor = "#bab057";
ruler.style.padding = "2px 6px"


sc.onclick = function(scClick) {
    sc.style.fontWeight = "bold";
}