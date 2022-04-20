// declaring varibales 
let txt = document.getElementById("txt");
let output = document.getElementById("output");


// bad words array 
let badWords = ["clear", "water", "tires"];
let count;

// function used to catch any bad words once the button is clicked
function btnClick() {
    let count = 0;
    let utxt = "";

    let sen = txt.value;
    console.log(sentence);
    let words = [];

    // used to take the user input and produce a "clean" version 
    words = sen.split(" ");
    // outputs how many bad words were found and produces the results
    for (let i = 0; i < badWords.length; i++){

        for(x = 0; x < words.length; x++) {
           if (words[i] == badWords[i]) {
            count++; 
        }  
        
     }

    //  if statement to output different prompts depending on the user input
    }
        if (count == 0) {
            output.innerHTML = "No bad words found"
        }else{
            output.innerHTML = "Bad word found <br> Total bad words: " + count; 
        }

        // sets input back to empty 
        txt.value = "";
    
}