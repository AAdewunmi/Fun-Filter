window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
var originalImage = null;
var grayImage = null;
var redImage = null; 
var rainbowImage = null;
var blurImage = null;
var canvas = document.getElementById("can");

function loadBackgroundImage(){
  var file = document.getElementById("fgfile");
  originalImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  blurImage = new SimpleImage(file);
  //fgCanvas = document.getElementById("can");
  originalImage.drawTo(can);
}

function doGray(){
  //fgCanvas = document.getElementById("can");
  //alert("first button");
  if (imageIsLoaded(grayImage)){
    filterGray();
    grayImage.drawTo(can)
  }
}

function filterGray(){
  for (var pixel of grayImage.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doRed(){
  //fgCanvas = document.getElementById("can");
  //alert("second button");
  if (imageIsLoaded(redImage)){
    filterRed();
    redImage.drawTo(can)
  }
}

function filterRed(){
  for (var pixel of redImage.values()){
    var avg = (pixel.getRed() + pixel.getGreen + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function doRainbow(){
  //fgCanvas = document.getElementById("can");
  //alert("third button");
  if (imageIsLoaded(rainbowImage)){
    filterRainbow();
    rainbowImage.drawTo(can)
  }
}

function filterRainbow() {
    var height = rainbowImage.getHeight();
    for (var pixel of rainbowImage.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      //red
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 2 / 7) {
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 3 / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 4 / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 5 / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
}

function doBlur(){
  //fgCanvas = document.getElementById("can");
  //alert("fourth button");
  if (imageIsLoaded(blurImage)){
    filterBlur();
    blurImage.drawTo(can)
  }
}



function resetImage(){
  //fgCanvas = document.getElementById("can");
  //alert("reset image");
  if (imageIsLoaded(originalImage)){
    originalImage.drawTo(can);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    rainbowImage = new SimpleImage(originalImage);
    //blurImage = new SimpleImage(originalImage);
  }
}

function imageIsLoaded(img){
  if (img == null || !img.complete()){
    alert("Image not loaded");
    return false;
  } else {
    return true;
  } 
}