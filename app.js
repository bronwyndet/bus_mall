'use strict';

var productImageArray = [];
var displayRounds = 0;
var votingResults = [];
var imageDisplaysArray = [];
var percentResults = [];
var chartNames = [];
var pickRandom = [];
var previouslyShown = [];
var justVotesChart;
var percentChart;

// VERIFY IF IMAGE OBJECTS ALREADY EXIST IN LOCAL STORAGE, IF NOT THEN CREATE OBJECTS
if (JSON.parse(localStorage.getItem('storedCatalogObjects'))) {
  productImageArray = JSON.parse(localStorage.getItem('storedCatalogObjects'));
} else {
  createCatalogImages();
};

//CONSTRUCTOR TO CREATE PROUDCT IMAGE OBJECTS AND PUSH INTO ARRAY
function CatalogImage(imageFullName, imagePath) {
  this.imageFullName = imageFullName;
  this.imagePath = imagePath;
  this.imageDisplays = 0;
  this.imageVotes = 0;
  productImageArray.push(this);
};

// FUNCITON TO CREATE PODUCT IMAGE OBJECTS
function createCatalogImages () {
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
};

//REACHING OUT TO AND ACCESSING THE PAGE
var clickField = document.getElementById('imageField');
var clickLeft = document.getElementById('imageLeft');
var clickCenter = document.getElementById('imageCenter');
var clickRight = document.getElementById('imageRight');
var buttonEvent = document.getElementById('button');
var votingText = document.getElementById('votingText');
var votingParagraph = document.getElementById('votingParagraph');
var percentText = document.getElementById('percentText');
var percentParagraph = document.getElementById('percentParagraph');

// GENERATING RANDOM IMAGES TO BE USED BY displayThreeRandomImages
function generateThreeRandomNumbers() {

  pickRandom = [];

  // first position random number
  pickRandom.push(Math.floor(Math.random() * productImageArray.length));
  // second position random number
  pickRandom.push(Math.floor(Math.random() * productImageArray.length));
  // third position random number
  pickRandom.push(Math.floor(Math.random() * productImageArray.length));

  //WHILE LOOP TO PREVENT DISPLAY OF IMAGE FROM PREVIOUS VIEW, AND PREVENT DUPLICATE IMAGES IN ONE VIEW
  while (
      pickRandom[0] === previouslyShown[0] ||
      pickRandom[0] === previouslyShown[1] ||
      pickRandom[0] === previouslyShown[2] ||
      pickRandom[1] === previouslyShown[0] ||
      pickRandom[1] === previouslyShown[1] ||
      pickRandom[1] === previouslyShown[2] ||
      pickRandom[2] === previouslyShown[0] ||
      pickRandom[2] === previouslyShown[1] ||
      pickRandom[2] === previouslyShown[2] ||
      pickRandom[0] === pickRandom[1] ||
      pickRandom[1] === pickRandom[2] ||
      pickRandom[0] === pickRandom[2] ) {
    pickRandom[0] = (Math.floor(Math.random() * productImageArray.length));
    pickRandom[1] = (Math.floor(Math.random() * productImageArray.length));
    pickRandom[2] = (Math.floor(Math.random() * productImageArray.length));
  }
};

//FUNCTION FOR DISPLAYING THE THREE IMAGES TO THE PAGE USING THE RANDOM NUMBERS FOR INDEXES
function displayThreeRandomImages() {

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

};

// EVENT HANDLER FOR CLICK VOTES
function handleSurveyClick (event) {

  var eventClick = event.target.id;

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

  if (displayRounds > 24) {
    clickField.removeEventListener('click', handleSurveyClick);
    button.hidden = false;
    for (var n = 0; n < productImageArray.length; n++) {
      chartNames.push(productImageArray[n].imageFullName);
      votingResults.push(productImageArray[n].imageVotes);
      imageDisplaysArray.push(productImageArray[n].imageDisplays);
    }
    localStorage.setItem('storedCatalogObjects', JSON.stringify(productImageArray));
  }

  previouslyShown = pickRandom;

  displayThreeRandomImages();
};

// FUNCTION TO CALCULATE PERCENTAGE OF IMAGE VOTES TO IMAGE DISPLAYS
function calcVotingPercentages() {
  for (var k = 0; k < productImageArray.length; k++) {
    percentResults.push(Math.floor((votingResults[k] / imageDisplaysArray[k]) * 100));
  }
};

//FUNCTION TO HANDLE CLICKING THE RESULTS BUTTON, WHICH WILL TRIGGER GENERATING THE CHARTS
function handleResultsButton() {
  calcVotingPercentages();
  displayVotingChart();
  displayPercentageChart();
};

//FUNCTION TO GENERATE THE VOTES CHART
function displayVotingChart() {
  votingText.hidden = false;
  votingParagraph.hidden = false;

  //CHART.JS INPUT
  var data = {
    labels: chartNames,
    datasets: [
      { data: votingResults,
        backgroundColor: 'green',
        hoverBackgroundColor: 'purple',
      }
    ]
  };

  var ctx = document.getElementById('votingResults').getContext('2d');
  justVotesChart = new Chart (ctx, {
    type: 'bar',
    data: data,
    options: false,
  });
};

// FUNCTION TO GENERATE PERCENTAGES CHART
function displayPercentageChart() {
  percentText.hidden = false;
  percentParagraph.hidden = false;


  //CHART.JS INPUT
  var data = {
    labels: chartNames,
    datasets: [
      { data: percentResults,
        backgroundColor: 'green',
        hoverBackgroundColor: 'purple',
      }
    ]
  };

  var ctx = document.getElementById('percentResults').getContext('2d');
  percentChart = new Chart (ctx, {
    type: 'bar',
    data: data,
    options: false,
  });
};


displayThreeRandomImages();

// EVENT LISTENERS
clickField.addEventListener('click', handleSurveyClick);
buttonEvent.addEventListener('click', handleResultsButton);
