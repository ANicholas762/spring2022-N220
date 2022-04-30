backgroundColor = "#6c9496";

let cardDeck = document.getElementById("cardDeck");
cardDeck.style.width = "120px";
cardDeck.style.height = "180px";
cardDeck.style.backgroundColor = "#629695";
cardDeck.style.padding = "16px";
cardDeck.style.borderRadius = ("4px");
cardDeck.style.boxShadow = ("8px 9px 26px 0 rgba(46, 61, 73, 0.5");
cardDeck.style.justifyContent = ("space-around");
cardDeck.style.alignItems = ("center");
cardDeck.style.margin = ("0 0 48px");

let card = document.getElementById("card");
card.style.height = ("140px");
card.style.width = ("120px");
card.style.margin = ("2px 2px");
card.style.background = ("#92ad39");
card.style.fontSize = ("64px");
card.style.textAlign = ("center");
card.style.color = ("#ffffff");
card.style.borderRadius = ("5px");
card.style.justifyContent = ("center");
card.style.alignItems = ("center");
card.style.boxShadow = ("5px 2px 20px 0 rgba(46, 61, 73, 0.5)");

var memory_array = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var memory_value = [];
var memory_card = [];
let flip;

// accessing the numbers in the array 
memory_array = function() {

    var i = val.length;
    var num;
     var temp;

    //  while loop to randomize the numbers in the array above for the deck of cards
    while(i > 0) {
        let num = Math.floor(Math.random() * (i+1));
        let temp = val[num];
        val[num] = val[i];
        val[i] = temp;
        }
    
    }
    
    //Function to flip card and try to find match
function flipCard(val) {

    if(card.innerHTML == "" && memory_value.length < 2) {
        card.innerHTML = val;
    
    if(memory_value.length == 0){
        memory_value.push(val);
        memory_card.push(card);
    
    } else if(memory_value.length == 1) {
        memory_value.push(val);
        memory_card.push(card);
    
    if(memory_value[0] == memory_value[1]) {
        flip += 2;
    
    // clearing both arrays
        memory_value = [];
        memory_card = [];
    
    if(flip == memory_array.length){
        document.write = ("You Won!");
    }
    
    }else{
    
        // function to flip the cards back over and start over 
    function flipBack() {

    let cardOne = document.getElementById(memory_card[0]);
    let cardTwo = document.getElementById(memory_card[1]);
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    
    // clearing both arrays
    memory_array = [];
    memory_card = [];
    
    }
    
    
    }
    
    }
    
    }
    
    }
    
    
    