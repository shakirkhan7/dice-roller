const dieRolls = []
const rollButton = document.querySelector('#roll-button')
let userInput = document.querySelector('input')
let totalValue = document.querySelector('#total')
let showAllrollsButton = document.querySelector('#show-all-rolls-button')
let listElement = document.querySelector('#all-rolls')
let resetButton = document.querySelector('#reset')
rollButton.addEventListener("click", function () {
    let diceInput = document.querySelector('#dice-number').value
    let counter = 0
    let total = 0
    while (counter < userInput.value) {
        diceInput = Math.floor(Math.random() * 6) + 1;
        counter += 1
        total += diceInput
        console.log(diceInput)
        dieRolls.push(diceInput);
    }
    totalValue.innerHTML = 'The Sum Of The Rolls Is ' + total
})
showAllrollsButton.addEventListener("click", function () {
    let counter = 0
    while (counter < dieRolls.length) {
        listElement.innerHTML += "<li>" + dieRolls[counter] + "</li>";
        counter += 1
    }
})
resetButton.addEventListener('click', function () {
    userInput.value = newCounterValue = ' ';
    totalValue.innerHTML = newCounterValue = 'The Sum Of The Rolls Is ' + 0;
    listElement.innerHTML = newCounterValue = ' ';
})

var rollTheDice = function() {
    var i,
        faceValue,
        output = '',
        diceCount = document.querySelector('input[type=number]').value || 1;
    for (i = 0; i < diceCount; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += "&#x268" + faceValue + "; ";
        
        
    }
    
}
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);
  

  document.querySelector('input[type=button]').addEventListener('click', function(){rollTheDice();});


        //  ASSESSMENT FINISHED UP HERE //