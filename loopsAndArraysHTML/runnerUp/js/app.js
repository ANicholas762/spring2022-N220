let val = document.getElementById("val");
// let input = val.value;
let count; 
 let num_array = [3];

// function used to capture the users input once the button is clicked.
function btnClick() {

// pulling the users input
let input = document.getElementById("input");
let txt = input.value;
  
// for loop to pull all three values and determining the highest number and the runnerup
for (let i = 0; i < num_array.length; i++); {
    for (let a = 1; a < num_array.length; a++) {
        if (num_array[i] < num_array[a]) {
            count = num_array[i];
            num_array[i] = num_array[a];
            num_array[a] = count;
        }
    }
} 
}


document.innerHTML = "Runner up: " + num_array[1] + "and" + num_array[2];