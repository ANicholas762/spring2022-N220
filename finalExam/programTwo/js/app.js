let num = document.getElementById("num");
let count = 0;

num.innerHTML = "1000";

// function to count off how many times the div is clicked
num.onclick = function(numClick) {
    count = count + 1;
    console.log(count);

    // when the div is clicked, divide the number by .10
    for(i = 0; i == 1; i++) {
        num = num * .10;
    }

    num = 1000 * .10;

    // displays the output on the screen with a new value
    output.innerHTML = num;
}