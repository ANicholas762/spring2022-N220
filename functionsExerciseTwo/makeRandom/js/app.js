function btnClick() {
    let txt = document.getElementById("txt").innerHTML = getRanNum(1, 100); 
}

function getRanNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    
}


