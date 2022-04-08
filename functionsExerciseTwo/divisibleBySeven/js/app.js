function btnClick() {
    let output = document.getElementById("output");
    let user = document.getElementById("userInput");
        let userTxt = user.value; 

    if (userTxt % 7 === 0) {
        // console.log("True");
        output.innerHTML = "True"
    }else{
        // console.log("False");
        output.innerHTML = "False"
    }
}