function btnClick() {
    let txt = document.getElementById("txt");

let userTxt = document.getElementById("userInput");
let val = userTxt.value;

    txt.innerHTML = "Results:" + val;
    // output.innerHTML = "Result:" + txt;
}