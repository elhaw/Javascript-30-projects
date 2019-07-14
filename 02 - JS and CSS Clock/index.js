let time = new Date();
let hours  = time.getHours();
let minutes  = time.getMinutes();
let seconds  = time.getSeconds();


const secondsHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

seconds  = (seconds ) % 60 ;
secondsDegree = ((seconds * 6) % 360) + 90;
secondsHand.style.transform = `rotate(${secondsDegree}deg)`;


minutes  = (minutes) % 60 ;
minutesDegree = ((minutes * 6) % 360) + 90;
minutesHand.style.transform = `rotate(${minutesDegree}deg)`;


hours  = (hours) % 24 ;
hoursHandDegree = ((hours * 15) % 360) + 90;
hoursHand.style.transform = `rotate(${hoursHandDegree}deg)`;

setInterval(function(){

    seconds  = (seconds + 1) % 60 ;
    secondsDegree = ((seconds * 6) % 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

},1000)

setInterval(function () { 

    minutes  = (minutes + 1) % 60 ;
    minutesDegree = ((minutes * 6) % 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(minutes)
},60000)

setInterval(function () { 

    hours  = (hours + 1) % 24 ;
    hoursHandDegree = ((hours * 15) % 360) + 90;
    hoursHand.style.transform = `rotate(${hoursHandDegree}deg)`;
    console.log(hours)
},3600000)