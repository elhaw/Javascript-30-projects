"use strict"


// select inputs 
const blur = document.querySelector('#blur')
const space = document.querySelector('#spacing');
const base = document.querySelector('#base');

//the image at which style will be applied
const targtedImage = document.querySelector('img')


/*
    call back function  for updating 
    vlaues when cnhange occurs
*/ 


function updateBlurValue(e) {
    let blurValue = e.target.value;
    targtedImage.style.filter = `blur(${blurValue}px)`;
}


function updatePadding(e) {


    let paddingValue = e.target.value;
    targtedImage.style.padding = `${paddingValue}px`;
}



function updateBaseColor(e) {

    let baseColor = e.target.value;
    targtedImage.style.background = `${baseColor}`; 

}



space.addEventListener('change', updatePadding);
blur.addEventListener('change', updateBlurValue);
base.addEventListener('change', updateBaseColor)


