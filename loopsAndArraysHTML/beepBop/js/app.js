let val = document.getElementById("val");

// for loop containging an if/else if statement to determine which numbers are divisble by the designated values. 

for (let i = 1; i < 26; i++) {
    if (i % 3 == 0) {
        console.log("beep");
    }else if (i % 5 == 0) {
        console.log("bop");
    }else if (i % 3 == 0 && i % 5 == 0) {
        console.log("beepbop");
    }else{
        console.log(i);
    }
}

document.write("Check Console!");