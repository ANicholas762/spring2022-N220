// function for when the button is clicked, the users input is read. 
function btnClick() {
    let output = document.getElementById("output");
    let user = document.getElementById("userInput");
        let userTxt = user.value; 

        //  if the number is divisible by 7, then the output will display "True"
    if (userTxt % 7 === 0) {
        // console.log("True");
        output.innerHTML = "True"

        // if the number is not divisible by seven then the output will display false
    }else{
        // console.log("False");
        output.innerHTML = "False"
    }
}