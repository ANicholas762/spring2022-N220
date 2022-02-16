let sq = document.getElementById("sq")
sq.style.height = "100px";
sq.style.width = "100px";
sq.style.backgroundColor = "#003552";

sq.onmouseover = function(sqMouseOver) {
    
        sq.style.backgroundColor = "#000000";
    
}

sq.onmouseout = function(sqMouseOut) {
    
        sq.style.backgroundColor = "#003552";
    
}