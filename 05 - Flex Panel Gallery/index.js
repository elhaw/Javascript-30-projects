window.onload = ()=>{

    const allPanels =  document.querySelectorAll('.panel')

    allPanels.forEach((panel)=>{
        panel.addEventListener('click',()=>{
            const allP = panel;
            console.log(allP)
           panel.classList.toggle('open-active')
        })
    })

}