// //  document.getElementById("count").innerText = 10;

// let count = 0;
// // document.getElementById("btn").addEventListener("click", function() {
// //     count++;
// //     document.getElementById("count").innerText = count;
  
// // });
// function increment() {
//     console.log("the button was clicked");
    
//     count = 0 + 1;
//     document.getElementById("count-el").innerText = count;
//     console.log(count);
// }
// increment();
// //  console.log(document.getElementById("count").innerText);
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// // camelCase
let saveEl = document.getElementById("save-el") 
// console.log(saveEl)
let countEl = document.getElementById("count-el")

console.log(saveEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
function save() {
    let countStr = count + " - "
  
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
  
    console.log(count)

}