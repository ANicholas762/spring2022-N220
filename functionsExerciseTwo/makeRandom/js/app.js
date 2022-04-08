function btnClick(min, max) {
    let txt = document.getElementById("txt").innerHTML = getRanNum(1, 100); 
}

function getRanNum() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


