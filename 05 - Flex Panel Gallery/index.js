window.onload = ()=>{

    const allPanels =  document.querySelectorAll('.panel')

    allPanels.forEach((panel)=>{
        panel.addEventListener('click',()=>{
            
           panel.classList.toggle('open-active')
        })
    })

    const transitionedElements = document.querySelectorAll('.panel')
    transitionedElements.forEach((element)=>{
        element.addEventListener('transitionend',(e)=>{
            element.children[0].classList.toggle('open-active')
            element.children[2].classList.toggle('open-active')
        })  

    })
}