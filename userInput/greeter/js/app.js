let txtInput = document.getElementById("txtInput");
txtInput.style.padding = "5px";
txtInput.style.borderRadius = "4px";
txtInput.style.borderColor = "#328ba8";


function btnClick() {
    let btn = document.getElementById("btn");
    let user = txtInput.value;
    console.log("Hello" + " " + user);
}