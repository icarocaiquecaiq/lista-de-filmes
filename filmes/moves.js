/* nav */
const buttonNav = document.querySelector('.proper-mobile-nav-icon')
const navOpened = document.querySelector('.close-mobile-nav')

buttonNav.addEventListener('click', ()=>{
    buttonNav.classList.toggle('nav-icon-reverse')
    navOpened.classList.toggle('open-mobile-nav')
    
})
/* nav */


/* arrow-up */
const arrow = document.querySelector('.arrow')


window.addEventListener("scroll",(e)=>{
    const teste = window.scrollY
    
    if(teste>800){
        arrow.classList.add('arrow-down')
        
    }else{
        arrow.classList.remove("arrow-down")
    }
    
})
/* arrow-up */


/* modo-escuro */
const classDarkMode = document.querySelector('html')
const buttonDarkMode = document.querySelector('.dark-mode-icon')

buttonDarkMode.addEventListener("click",(e)=>{
    classDarkMode.classList.toggle('mode-dark')
})
/* modo-escuro */