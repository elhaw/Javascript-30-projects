

// window on load : excute the function after dociment is loaded and 
// external resoureces, images. ..etc.
window.onload = ()=> {

    window.addEventListener('keydown', (e)=>{
        //check if key code equal on of the lised letters above
        //if so run the sound related to the key
        //also do some animation 
        //else notthing
        const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`)
        if(!audio) return;
        audio.currrentTime=0;
        audio.play();
        key.classList.add("playing");
    });
  
  
    //select all transitiond elements
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',function removeTransition(e) {
  
              if (e.propertyName !== 'transform') return;
              this.classList.remove('playing');  
    }));
   }
  