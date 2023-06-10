const icon = document.querySelector('.icon-select')
const arrow = document.querySelector('.fa-arrow-down')

icon.addEventListener('click',(e)=>{
    arrow.classList.toggle('fa-arrow-up')
    
})
