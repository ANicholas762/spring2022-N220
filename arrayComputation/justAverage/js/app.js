let txt = document.getElementById("txt");

// array for user input
let num_array = [];
 let sum = 0;
 let average = 0;

// function used to collect the numbers from the user 
function btnClick() {
    let num = txt.value;
    console.log(num);

    // split the numbers up into an array
    let splitValue = num.split(",");
    console.log(splitValue);
    splitValue.forEach(element => {
        console.log(element);

        element = parseInt(element);
        sum = sum + element;

    });

        average = sum / splitValue.length;
    output.innerHTML = "Sum: " + sum + " " + "Average:" + average;

    // calculates the total from the user input and prints the sum and average
    // for(var i = 0; i < num.split; i++) {
    
    //     

    // }
    
}