'use strict';


var productImageArray = [];

function CatalogImage (imageFullName, imagePath) {
  this.imageFullName = imageFullName;
  this.imagePath = imagePath;
  this.imageDisplays = 0;
  this.imageVotes = 0;
  productImageArray.push(this);

};



var clickField = document.getElementById('surveyField');
var clickLeft = document.getElementById('imageLeft');
var clickCenter = document.getElementById('imageCenter');
var clickRight = document.getElementById('imageRight');

clickLeft.src = CatalogImage[i].imagePath;

var handleSurveyClick = function () {

  clickPositionA




}


clickField.addEventListener('click', handleSurveyClick);
