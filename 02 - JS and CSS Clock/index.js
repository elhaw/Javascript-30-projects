// gettong time in hours, minutes, seconds
const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();


// select clockhands
const secondsHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

/*
    Initialize time
    Adding offset 90 so that time initialized at 00:00:00
*/

// map seconds to degree
secondsDegree = ((seconds * 6)) + 90;
secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

// map minutes to degree

minutesDegree = ((minutes * 6)) + 90;
minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

// map hours to degree
hoursHandDegree = ((hours * 15)) + 90;
hoursHand.style.transform = `rotate(${hoursHandDegree}deg)`;


/*  Initilize time end */

/* 

    Increase seconds count every 1 sec till it 
    for the seconds hand
*/

setInterval(function () {
    seconds = (seconds + 1);
    secondsDegree = ((seconds * 6)) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}, 1000)

/* 

    Increase seconds count every 1 min = (((60 * 1000 ms))) till it 
    for the mintes hand
*/

setInterval(function () {

    minutes = (minutes + 1);
    minutesDegree = ((minutes * 6)) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(minutes)
}, 60 * 1000)

/* 

    Increase hours count every 1hour((( 1h = 60 min = 60 * 60 * 60 ms))) sec till it 
    for the hours hand
*/

setInterval(function () {

    hours = (hours + 1);
    hoursHandDegree = ((hours * 15)) + 90;
    hoursHand.style.transform = `rotate(${hoursHandDegree}deg)`;
    console.log(hours)
}, 60 * 60 * 1000)