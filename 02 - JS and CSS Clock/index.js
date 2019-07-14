let time = new Date();
let hours  = time.getHours();
let minutes  = time.getMinutes();
let seconds  = time.getSeconds();


const secondsHand = document.querySelector('.second-hand')

setInterval(function(){

    seconds  = (seconds + 1) % 60 ;
    secondsDegree = ((seconds * 6) % 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds , secondsDegree)

},1000)