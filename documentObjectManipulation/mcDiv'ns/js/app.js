let txt = document.getElementById("txt");
let count = 0;

txt.innerHTML = "Disney";
txt.style.fontSize = "50px";

txt.onclick = function(txtClick) {
    count = count + 1;
    console.log(count);

      if(count < 3) {

        txt.innerHTML = "mc" + txt.innerHTML;
    }else{
        txt.innerHTML = "divdivdiv";
    } 
}

   

   
