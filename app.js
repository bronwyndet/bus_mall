'use strict';


var productImageArray = [];


//CONSTRUCTOR TO CREATE PROUDCT IMAGES AND PUSH INTO ARRAY
function CatalogImage (imageFullName, imagePath) {
  this.imageFullName = imageFullName;
  this.imagePath = imagePath;
  this.imageDisplays = 0;
  this.imageVotes = 0;
  productImageArray.push(this);

  console.log(this);
};

new CatalogImage('R2D2 Luggage', 'img/bag.jpg');
new CatalogImage('Banana Slicer', 'img/banana.jpg');
new CatalogImage('Toilet Roll Tablet Stand', 'img/bathroom.jpg');
new CatalogImage('Toeless Boots', 'img/boots.jpg');
new CatalogImage('Eggs Toast Coffee Appliance', 'img/breakfast.jpg');
new CatalogImage('Meatball Bubblegum', 'img/bubblegum.jpg');
new CatalogImage('Inverted Chair', 'img/chair.jpg');
new CatalogImage('Chthulhu Action Figure', 'img/cthulhu.jpg');
new CatalogImage('Duck Mask for Dog', 'img/dog-duck.jpg');
new CatalogImage('Dragon Meat', 'img/dragon.jpg');
new CatalogImage('Utensil Pen Cap', 'img/pen.jpg');
new CatalogImage('Pet Sweeper', 'img/pet-sweep.jpg');
new CatalogImage('Pizza Scissors', 'img/scissors.jpg');
new CatalogImage('Shark Sleeping Bag', 'img/shark.jpg');
new CatalogImage('Onsie Sweeper', 'img/sweep.png');
new CatalogImage('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new CatalogImage('Unicorn Spam Meat', 'img/unicorn.jpg');
new CatalogImage('Tentacle USB', 'img/usb.gif');
new CatalogImage('Watering Can', 'img/water-can.jpg');
new CatalogImage('Contained Wine Glass', 'img/wine-glass.jpg');


//REACHING OUT TO AND ACCESSING THE PAGE
var clickField = document.getElementById('surveyField');
var clickLeft = document.getElementById('imageLeft');
var clickCenter = document.getElementById('imageCenter');
var clickRight = document.getElementById('imageRight');


// CODE TO MAKE RANDOM IMAGES APPEAR ON PAGE AND DIFFERENT IN ALL 3 POSITIONS (and not just displayed
var pickRandom = [];
console.log(pickRandom);

function randomizer () {

  var a = Math.floor(Math.random() * (19 - 0 + 1) + 0);
  // justDisplayed.push(a);
  pickRandom.push(a);

  var b = Math.floor(Math.random() * (19 - 0 + 1) + 0);
  if (b === a) {
    b++;
    pickRandom.push(b);
  } else {
    pickRandom.push(b);
  };

  var c = Math.floor(Math.random() * (19 - 0 + 1) + 0);
  if (c === b && c !== (a + 1)) {
    c++;
    pickRandom.push(c);
  } else if (c === a && c !== (b - 1)) {
    c++;
    pickRandom.push(c);
  } else {
    pickRandom.push(c);
  };


//METHOD TO PREVENT IMAGE FROM BEING DISPLAYED THAT WAS JUST DISPLAYED ON PREVOIUS CLICK
// (not working yet)
  //
  // var justDisplayed = [];
  // justDisplayed[0].push(pickRandom[0]);
  // justDisplayed[1].push(pickRandom[1]);
  // justDisplayed[2].push(pickRandom[2]);
  // console.log(justDisplayed);
  //
  // for (var i = 0; i < justDisplayed.length; i++) {
  //   if (justDisplayed[i] === pickRandom[0] || justDisplayed[i] === pickRandom[1] || justDisplayed === pickRandom[2]) {
  //     randomizer();
  //   } else {
  //     return;
  //   }
  // };
  //
  // justDisplayed = null;
  //
  // console.log(a);
  // console.log(b);
  // console.log(c);

};

function randomLeft() {
  clickLeft.src = productImageArray[pickRandom[0]].imagePath;
};

function randomCenter () {
  clickCenter.src = productImageArray[pickRandom[1]].imagePath;
};

function randomRight () {
  clickRight.src = productImageArray[pickRandom[2]].imagePath;
};

randomizer();
randomLeft(pickRandom[0]);
randomCenter(pickRandom[1]);
randomRight(pickRandom[2]);
// clickCenter.src = productImageArray[1].imagePath;
// clickRight.src = productImageArray[2].imagePath;


// EVENT HANDLER TO ...
// var handleSurveyClick = function () {
//
//   event.preventDefault();
//
// var testFunction = function() {
//   for (var i = 0; i < productImageArray.length; i++) {
//     this.productImageArray[i](Math.floor(Math.random() * (productImageArray.length - 0 + 1) + 1));
// }


// EVENT LISTENER (LISTENING FOR CLICK IN THE SURVEY FIELD) AND TRIGGER HANDLER
// clickField.addEventListener('click', handleSurveyClick);



// if ((productImageArray[i].imageDisplays - 1) === i) {
//   clickLeft.src = productImageArray[i].imagePath;
// } else {
//   var n = Math.floor(Math.random() * (19 - 0 + 1) + 0);
//   console.log(randomLeft);
//   productImageArray[n].imageDisplays += 1;
//   clickLeft.src = productImageArray[n].imagePath;
// }
