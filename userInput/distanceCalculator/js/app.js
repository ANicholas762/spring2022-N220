let txtInput = document.getElementById("txtInput");
// txtInput.style.display = "flex";
txtInput.style.padding = "10px";
txtInput.style.borderRadius = "6px";
txtInput.style.borderColor = "#328ba8";


function btnClick() {
  let btn = document.getElementById("btn");
  let output = document.getElementById("output");
  
  let x1 = document.getElementById("x1");
    let x1txt = x1.value;
  let y1 = document.getElementById("y1");
    let y1txt = y1.value;
  let x2 = document.getElementById("x2"); 
    let x2txt = x2.value;
  let y2 = document.getElementById("y2");
    let y2txt = y2.value;

    var distance = Math.sqrt(x1txt * y1txt + x2txt * y2txt);
    console.log(distance);
    // output.innerHTML = "Distance:" + dist;
}