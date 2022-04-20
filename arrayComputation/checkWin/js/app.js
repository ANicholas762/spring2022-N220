let txt = document.getElementById("txt");
let output = document.getElementById("output");

let value_array = [];

// function used to gather the users input value 
function btnClick() {
    let num = txt.value;
    console.log(num);

    let splitValue = num.split(",");
    console.log(splitValue);
    splitValue.forEach(element => {
        console.log(element);

        element = parseInt(element);

        if (num == 1) {
            output.innerHTML = "WINNER!"
        }else{
            output.innerHTML = "not winner"
        }
    });
    
    txt.value = "";
}