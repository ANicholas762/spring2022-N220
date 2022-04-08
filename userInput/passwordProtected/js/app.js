// Global variables and styling
let userInput = document.getElementById("userInput");
userInput.style.display = "flex";
userInput.style.padding = "5px";
userInput.style.borderRadius = "4px";
userInput.style.borderColor = "#328ba8";

// label styling
let label = document.getElementById("label");
label.style.padding = "5px";

let pLabel = document.getElementById("pLabel");
pLabel.style.padding = "5px";

output.style.fontSize = "30px";
output.style.padding = "10px";
output.style.margin = "10px";

// function and testing
function btnClick(){
    let output = document.getElementById("output");
    let btn = document.getElementById("btn");
    let txtUser = document.getElementById("userName");
        let user = txtUser.value;
    let txtPass = document.getElementById("passWord");
        let pass = txtPass.value;

    if((user == "username") && (pass == "password")) {
       output.innerHTML = "Success!"
    }else{
        output.innerHTML = "Wrong Information"
    }
    
}