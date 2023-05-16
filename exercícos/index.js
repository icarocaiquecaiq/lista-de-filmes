 const body = document.querySelector("body")
/* 1° desafio
 console.log(body);

body.innerHTML = `<h1>100 exercícios com JS</h1> 

<p>olá mundo<p>`

*/



/*  2° desafio
 body.innerHTML = `<form> 
                        <label for="input">qual o seu nome?</label> 
                        <input type= text id= "input" placeHolder = "e.x: sergio">
                        <input type= submit value= "mandar" class= "btn">  
                    </form>`


const input = document.querySelector("#input")
const btn = document.querySelector(".btn")
console.log(btn);

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let valor = input.value
    console.log(valor)
    body.innerText= `olá ${valor}, seja bem vindo.`
})
 */

/* 3° exercício
body.innerHTML = `<form> 
                        <label for="input">qual o seu nome?</label> 
                        <input type= "text" id= "input" placeHolder = "e.x: sergio de Souza">
                        <label for="salar">quanto você ganha?</label>
                        <input type= "number" id= "salar" placeHolder = "e.x: 1850,45">
                        <input type= submit value= "mandar" class= "btn">  
                    </form>`

const input = document.querySelector("#input")
const btn = document.querySelector(".btn")
const salar = document.querySelector("#salar")



btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let valor = input.value
    console.log(valor)
    let salario = salar.value
    body.innerHTML = `<p>nome do funcionário(a): ${valor}</p>
                        <p>salário: ${salario}</p>
                        <p>o funcionario(a) ${valor} teve um salário de ${salario} no mês de junho</p>    `
}) */


/* 4° exercício 
body.innerHTML = `<p>fazer uma soma</p> <button class = "no" type = "button" >não</button> <button class= "yes" type = "button">sim</button>`

const soma = document.querySelector('.yes')
const naoQuero = document. querySelector('.no')
const texto = document.querySelector('p')

soma.addEventListener('click',()=>{
    let soma1 = prompt("coloque o primeiro número")
    let soma2 = prompt("coloque o segundo número")
    body.innerText= `a soma entre ${soma1} e ${soma2} é igual a: ${parseFloat(soma1)+parseFloat(soma2)}`

})

naoQuero.addEventListener("click",()=>{
    body.innerText= "desculpe, mas nesse site não posso lhe oferecer mais que uma simples soma entre dois números"


}) */

body.innerHTML=`<button class = "sim" type = "button">sim</button>
                <button class = "não" type = "button">não</button>`

let buttonS = document.querySelector(".sim")
let buttonN = document.querySelector(".não")

buttonS.addEventListener("click",()=>{
    buttonS = true
})

while (buttonS === "sim") {
    

body.innerHTML = `<form> 
                        <label for="nota1">nota 1:</label> 
                        <input type= "text" id= "nota1" placeHolder = "e.x: 4.9">
                        <label for="nota2">nota 2</label>
                        <input type= "text" id= "nota2" placeHolder = "e.x: 5.3">
                        <input type= "submit" value = "calcular média" class= "btn">  
                    </form>`


const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const btn = document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let notaValue1 = parseFloat(nota1.value)
    let notaValue2 = parseFloat(nota2.value)
    body.innerHTML = `<form> 
                        <label for="nota1">nota 1:</label> 
                        <input type= "text" id= "nota1" placeHolder = "e.x: 4.9">
                        <label for="nota2">nota 2</label>
                        <input type= "text" id= "nota2" placeHolder = "e.x: 5.3">
                        <input type= "submit" value = "calcular média" class= "btn">  
                    </form>
                    
                    
                    <p>a média entre ${notaValue1} e ${notaValue2} é igual a: ${(notaValue1+notaValue2)/2}</p>`

                    
})

}



