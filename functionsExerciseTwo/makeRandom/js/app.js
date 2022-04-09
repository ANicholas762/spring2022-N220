// function to setup the random number generator 
function btnClick() {
    let txt = document.getElementById("txt").innerHTML = getRanNum(1, 100); 
}

//  second function to display the random number from the previous function
function getRanNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    
}


