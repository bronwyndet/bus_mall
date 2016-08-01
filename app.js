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



//REACHING OUT TO AND ACCESSING THE PAGE
var clickField = document.getElementById('surveyField');
var clickLeft = document.getElementById('imageLeft');
var clickCenter = document.getElementById('imageCenter');
var clickRight = document.getElementById('imageRight');

// CODE TO MAKE IMAGES APPEAR ON PAGE

clickLeft.src = productImageArray[0].imagePath;
clickCenter.src = productImageArray[1].imagePath;
clickRight.src = productImageArray[2].imagePath;


// EVENT HANDLER TO ...
var handleSurveyClick = function () {

  event.preventDefault();

  for (var i = 0; i < productImageArray.length; i++) {
    productImageArray[i]

  }









// EVENT LISTENER (LISTENING FOR CLICK IN THE SURVEY FIELD) AND TRIGGER HANDLER
clickField.addEventListener('click', handleSurveyClick);
