<<<<<<< HEAD


=======
>>>>>>> 6c1e5c32530ec6aa5f268aaff7c23e207fd744e2
//Store a function as a variable which will generate a number between one and x
//x to be specified in future use of the function
var rollDice = function(x) {
  var randomNumber = Math.floor(Math.random() * x + 1);
  $('.face-single').text(randomNumber);
  console.log(randomNumber);
}

//When this button is clicked a random number will be generated and appended to the face-single div
<<<<<<< HEAD
$('.button-single').click(function(){
  rollDice(100);
=======

$('.button-single').click(function(){
  rollDice(100);
  $('.roller').toggleClass('roller-spin');
  $('.roller2').toggleClass('roller-spin');
>>>>>>> 6c1e5c32530ec6aa5f268aaff7c23e207fd744e2
});

// Two at a time

var rollDiceDouble = function(x) {
  var randomNumber = Math.floor(Math.random() * x + 1);
  $('.face-double1').text(randomNumber);
  console.log(randomNumber);
}


var rollDiceDouble2 = function(x) {
  var randomNumber = Math.floor(Math.random() * x + 1);
  $('.face-double2').text(randomNumber);
  console.log(randomNumber);
}

$('.button-double').click(function(){
  rollDiceDouble(6);
  rollDiceDouble2(6);
<<<<<<< HEAD
=======
  $('.roller').toggleClass('roller-spin');
  $('.roller2').toggleClass('roller-spin');
>>>>>>> 6c1e5c32530ec6aa5f268aaff7c23e207fd744e2
});


//Choose number of sides

function Die (sides) {
  this.sides = parseInt(sides);
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );
    console.log('rolled 1d'+ this.sides, " for ", result);
    return result;
  }
}
 
$('.create-die').click(function(){
  var sides = $('.die-sides').val();
  gameDie = new Die(sides);
})

$('.button-any').click(function(){
  $('.face-any').text(gameDie.roll());
<<<<<<< HEAD
});


//Trying to flip the cube
$('.button-cube').click(function(){
  $('.tridiv').toggleClass('cube-roll');
});





























=======
  $('.roller').toggleClass('roller-spin');
  $('.roller2').toggleClass('roller-spin');
});

  
>>>>>>> 6c1e5c32530ec6aa5f268aaff7c23e207fd744e2


