let sqSide = 100;



let sq = document.getElementById("sq")
sq.style.backgroundColor = "#5c875f";
sq.style.height = sqSide + 'px';
sq.style.width = sqSide + 'px';
sq.style.margin = "0 auto";


sq.onclick = function(divClick) {
    
        sqSide = sqSide * 1.1;
        sq.style.height = sqSide + 'px';
        sq.style.width = sqSide + 'px';

        
}