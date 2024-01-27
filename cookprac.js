let fighters = ["🐉", "🐥", 
"🐊","💩", "🦍",
 "🐢", "🐩", "🦭", "🦀", 
 "🐝", "🤖", "🐘", "🐸", 
 "🕷","🐆", "🦕", "🦁"];

let stageEl = document.querySelector('#stage');
let fightButton = document.getElementById('fightButton');

fightButton.addEventListener('click',function(){

let randomNumber = Math.floor(Math.random()  * fighters.length);
let randomNumber2 = Math.floor(Math.random()  * fighters.length);


stageEl.textContent += fighters[randomNumber] +"vs" + fighters[randomNumber2];


})


///count
let counterEl = document.querySelector('#counter-el');//binding for rendering counter..
let counter = 0;//counter intialising
let saveEl = document.querySelector('#previous-el');


//function to save dogs
function saveDogs(){
    saveEl.textContent  += "-" + counterEl.textContent;
     counter = 0;

 }

 
function countDogs(){ //defining a function to increment counter..
  counter += 1;
  counterEl.textContent  = counter;


}   





