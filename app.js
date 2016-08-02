'use strict';


var productImageArray = [];


//CONSTRUCTOR TO CREATE PROUDCT IMAGES AND PUSH INTO ARRAY
function CatalogImage (imageFullName, imagePath) {
  this.imageFullName = imageFullName;
  this.imagePath = imagePath;
  this.imageDisplays = 0;
  this.imageVotes = 0;
  productImageArray.push(this);

  // console.log(this);
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
var clickField = document.getElementById('imageField');
var clickLeft = document.getElementById('imageLeft');
var clickCenter = document.getElementById('imageCenter');
var clickRight = document.getElementById('imageRight');


var pickRandom = [];
var previouslyShown = [];


// CODE TO MAKE RANDOM IMAGES APPEAR ON PAGE AND DIFFERENT IN ALL 3 POSITIONS (and not just displayed
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

  previouslyShown = pickRandom;

  console.log(previouslyShown + ' were just shown');
  console.log(pickRandom + ' are the current images');

// METHOD TO PREVENT IMAGE FROM BEING DISPLAYED THAT WAS JUST DISPLAYED ON PREVOIUS CLICK
// (not working yet)

  // var justDisplayed = [];
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
  // justDisplayedLeft = null;
  // justDisplayedLeft = null;
  // justDisplayedLeft = null;

  //
  // console.log(a);
  // console.log(b);
  // console.log(c);

};

function randomLeft() {
  clickLeft.src = productImageArray[pickRandom[0]].imagePath;
  clickLeft.alt = productImageArray[pickRandom[0]].imageFullName;
  productImageArray[pickRandom[0]].imageDisplays += 1;
  productImageArray[pickRandom[0]].imageVotes += 1;

  console.log(productImageArray[pickRandom[0]].imageFullName + ' has ' + productImageArray[pickRandom[0]].imageDisplays + ' views');
};

function randomCenter () {
  clickCenter.src = productImageArray[pickRandom[1]].imagePath;
  clickCenter.alt = productImageArray[pickRandom[1]].imageFullName;
  productImageArray[pickRandom[1]].imageDisplays += 1;

  console.log(productImageArray[pickRandom[1]].imageFullName + ' has ' + productImageArray[pickRandom[1]].imageDisplays + ' views');
};

function randomRight () {
  clickRight.src = productImageArray[pickRandom[2]].imagePath;
  clickRight.alt = productImageArray[pickRandom[2]].imageFullName;
  productImageArray[pickRandom[2]].imageDisplays += 1;

  console.log(productImageArray[pickRandom[2]].imageFullName + ' has ' + productImageArray[pickRandom[2]].imageDisplays + ' views');
};




// EVENT HANDLER TO ...
function handleSurveyClick (event) {

  var eventClick = event.target.id;
  console.log(event.target.id); //telss which DOM elevent was clicked

  if (eventClick === 'imageLeft') {
    this.imageVotes += 1;
  }

  // if (eventClick === 'imageCenter') {
  //   this.imageVotes += 1;
  // }
  //
  // if (eventClick === 'imageRight') {
  //   this.imageVotes += 1;
  // }
  //
  // for (var i = 0; i < productImageArray.length; i++) {
  //   if (event.target.alt === productImageArray[i].imageFullName) {
  //     productImageArray[i].imageVotes += 1;
  //     console.log(productImageArray[i].imageVotes);
  //   }

  randomizer();
  randomLeft(pickRandom[0]);
  randomCenter(pickRandom[1]);
  randomRight(pickRandom[2]);

};

randomizer();
randomLeft(pickRandom[0]);
randomCenter(pickRandom[1]);
randomRight(pickRandom[2]);


// EVENT LISTENER (LISTENING FOR CLICK IN THE SURVEY FIELD) AND TRIGGER HANDLER
clickField.addEventListener('click', handleSurveyClick);
