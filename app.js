'use strict';


var productImageArray = [];
var displayRounds = 0;
var myBarChart = new Chart (ctx, {
  type: 'bar',
  data: data,
  options: options
});

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
var buttonEvent = document.getElementById('button');


var pickRandom = [];
var previouslyShown = [];


// GENERATING RANDOM IMAGES TO BE USED BY displayThreeRandomImages
function generateThreeRandomNumbers () {

  pickRandom = [];

  // first position random number
  pickRandom.push(Math.floor(Math.random() * productImageArray.length));

  // second position random number
  pickRandom.push(Math.floor(Math.random() * productImageArray.length));
  while (pickRandom[0] === pickRandom[1]) {
    pickRandom[1] = (Math.floor(Math.random() * productImageArray.length));
  }

  // third position random number
  pickRandom.push(Math.floor(Math.random() * productImageArray.length));
  while (pickRandom[0] === pickRandom[2] || pickRandom[1] === pickRandom[2]) {
    pickRandom[2] = (Math.floor(Math.random() * productImageArray.length));
  }

  while (
      pickRandom[0] === previouslyShown[0] ||
      pickRandom[0] === previouslyShown[1] ||
      pickRandom[0] === previouslyShown[2] ||
      pickRandom[1] === previouslyShown[0] ||
      pickRandom[1] === previouslyShown[1] ||
      pickRandom[1] === previouslyShown[2] ||
      pickRandom[2] === previouslyShown[0] ||
      pickRandom[2] === previouslyShown[1] ||
      pickRandom[2] === previouslyShown[2] ) {
    pickRandom[0] = (Math.floor(Math.random() * productImageArray.length));
    pickRandom[1] = (Math.floor(Math.random() * productImageArray.length));
    pickRandom[2] = (Math.floor(Math.random() * productImageArray.length));
  }
};


function displayThreeRandomImages () {

  generateThreeRandomNumbers();

  clickLeft.src = productImageArray[pickRandom[0]].imagePath;
  clickLeft.alt = productImageArray[pickRandom[0]].imageFullName;
  productImageArray[pickRandom[0]].imageDisplays += 1;

  clickCenter.src = productImageArray[pickRandom[1]].imagePath;
  clickCenter.alt = productImageArray[pickRandom[1]].imageFullName;
  productImageArray[pickRandom[1]].imageDisplays += 1;

  clickRight.src = productImageArray[pickRandom[2]].imagePath;
  clickRight.alt = productImageArray[pickRandom[2]].imageFullName;
  productImageArray[pickRandom[2]].imageDisplays += 1;

  // console.log(previouslyShown + ' were just shown');
  // console.log(pickRandom + ' are the current images');
  //
};


// EVENT HANDLER FOR CLICK VOTES
function handleSurveyClick (event) {

  var eventClick = event.target.id;
  // console.log(event.target.id); //telss which DOM elevent was clicked

  if (eventClick === 'imageField') {
    alert('Please click on an image.');
    return;
  }

  for (var i = 0; i < productImageArray.length; i++) {
    if(event.target.alt === productImageArray[i].imageFullName) {
      productImageArray[i].imageVotes += 1;
    }
  }

  displayRounds += 1;

  if (displayRounds >= 5) {
    clickField.removeEventListener('click', handleSurveyClick);
    button.hidden = false;
  }

  previouslyShown = pickRandom;

  displayThreeRandomImages();

};

function handleResultsButton () {
  displayVotingChart();
};




function displayVotingChart () {
  var data = {
    labels: productImageArray,
    datasets: [
      { }
    ]

  }
}





displayThreeRandomImages();

// EVENT LISTENERS
clickField.addEventListener('click', handleSurveyClick);
button.addEventListener('click', handleResultsButton);
