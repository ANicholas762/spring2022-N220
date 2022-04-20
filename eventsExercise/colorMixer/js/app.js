let count = 0;

let rec = document.getElementById("recBase");
rec.style.height = "200px";
rec.style.width = "600px";
rec.style.backgroundColor = "#000";
rec.style.margin = "40px";

let rgb = document.getElementById("rgb");
rgb.style.width = "600px";
rgb.style.height = "50px";
rgb.style.margin = "40px";
// rgb.style.borderRadius = "6px";
// rgb.style.borderColor = "#95969c";
rgb.style.backgroundColor = "#95969c";

let red = document.getElementById("red");

red.addEventListener("click", oneClick);
    function oneClick() {
        count = count + 1;

    }

    // red.oneClick = function oneClick() {
        
    //     }
