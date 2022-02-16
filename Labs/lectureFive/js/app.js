//Loops

/* let i = 0;

while(i < 6) {
    console.log("Hello!");
    i++;
}
 */

/* for(i = 0; i < 10; i++) {
    console.log("Hello Class!")
} */

//for loop has three statements (initialize a variable; while statement; increment)


// Arrays

let exampleDV = document.getElementById("example");
// arrays start counting at 0 so apples is 0, orange is 1, and tomato is 3
let fruits = ["apple", "orange", "tomato", "blueb"]
// fruits[1] = "kiwi";

console.log(fruits[1])

for(let i = 0; i < 4; i++) {
    exampleDV.innerHTML += fruits[i] + "<br/>";
}