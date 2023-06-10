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



/*  5° exercício 
const form = document.querySelector('h1')
const result = document.querySelector('p')
    

form.innerHTML = `<form> 
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
    result.textContent = 
                    
                    
                    `a média entre ${notaValue1} e ${notaValue2} é igual a: ${(notaValue1+notaValue2)/2}`

                    
})
 */

/*  6° exercício
const form = document.querySelector('.form')
const result = document.querySelector('p')
    

form.innerHTML = `<label for = "number">digite um número:</label> 
                  <input type= "number" id= "number" name = "number" placeHolder = "e.x: 4">
                  <input type= "submit" value = "enviar" class= "btn">   
                 `

const btn = document.querySelector('.btn')
const value = document.querySelector('#number')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const valor = parseFloat(value.value)
    const number = [valor-1,valor+1]
    result.innerText = `o antecessor de ${valor} é ${number[0]} e o sucessor é ${number[1]}`
})
 */



/* 7° exercício
const form = document.querySelector('.form')
const result = document.querySelector('p')
    

form.innerHTML = `<label for = "number">digite um número:</label> 
                  <input type= "number" id= "number" name = "number" placeHolder = "e.x: 4">
                  <input type= "submit" value = "enviar" class= "btn">   
                 `

const btn = document.querySelector('.btn')
const input = document.querySelector('#number')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const valor = parseFloat(input.value)
    const vezes = valor*2
    const dividendo = valor/3
    result.innerText = `o dobro de ${valor} é ${vezes} 
                        a terça parte de ${valor} é ${dividendo}`
})
 */



/* 
const form = document.querySelector('.form')
const result = document.querySelector('div')
    

form.innerHTML = `<label for = "number">uma distância em metros:</label> 
                  <input type= "number" id= "number" name = "number" placeHolder = "e.x : 3.5">
                  <input type= "submit" value = "enviar" class= "btn">   
                 `

const btn = document.querySelector('.btn')
const input = document.querySelector('#number')


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const valor = input.value
    const teste = convert(valor)
    result.innerHTML = 
    `<table>
        <thead>
            <tr>
                <td>a distância de ${valor}m corresponde a:</td>            
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>km</td> <td>${teste.km}</td>
            </tr>
            <tr>
                <td>hm</td> <td>${teste.hm}</td>
            </tr>
            <tr>
                <td>dam</td> <td>${teste.dam}</td>
            </tr>
            <tr>
                <td>dm</td> <td>${teste.dm}</td>
            </tr>
            <tr>
                <td>cm</td> <td>${teste.cm}</td>
            </tr>
            <tr>
                <td>mm</td> <td>${teste.mm}</td>
            </tr>
        </tbody>
    </table>`
   

})

function convert(n){
    const numero = parseFloat(n)
    let teste = {
        km : numero/1000,
        hm : numero/100,
        dam : numero/10,
        dm: numero*10,
        cm: numero*100,
        mm: numero*1000
    }
    return teste
}
 */



/* 9° exercício 
const form = document.querySelector('.form')
const result = document.querySelector('div')
    

form.innerHTML = `<label for = "number">quantos reais você tem na sua carteira</label> 
                  <input type= "text" id= "number" name = "number" placeHolder = "e.x: 10000">
                  <input type= "submit" value = "enviar" class= "btn">   
                 `

const btn = document.querySelector('.btn')
const input = document.querySelector('#number')


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const valor = input.value
    const dolars = dolar(valor)
    result.innerHTML = `<p>na sua carteira com ${valor}R$ você possui ${dolars}US dolares. O valor do dolar hoje <time datetime = 2023-05-17>(17-05-2023)4,95</p>`
})

function dolar(n){
    return parseFloat(n/4.95)
} */


/* 10° exercício
const form = document.querySelector('.form')
const result = document.querySelector('div')
    

form.innerHTML = ` 
<form>
    <label for = "altu">qual a largura da parede em metros:</label> 
    <input autofocus type= "text" id= "altu" name = "compri" placeHolder = "e.x: 15">
    <label for = "larg">qual o comprimento da parede em metros:</label> 
    <input type= "text" id= "larg" name = "larg" placeHolder = "e.x: 30">
    <input type= "submit" value = "enviar" class= "btn">
</form>   
                 `

const btn = document.querySelector('.btn')
const largura = document.querySelector('#altu')
const altura = document.querySelector('#larg')

btn.addEventListener('click',(e)=>{
    let value =  tintaArea(parseInt(altura.value),parseInt(largura.value)) 
    e.preventDefault()
    result. innerHTML = `<p>a área a ser pintada é de ${value.area}m. será necessário ${value.tinta}L de tinta para pintar toda área</p>`
    
})

function tintaArea(l,a){
    return dados = {
        area: l*a,
        tinta: (l*a)/2
    }
}
 */


/* 11° exercício 
const form = document.querySelector('.form')
const result = document.querySelector('div')
    

form.innerHTML = ` 
<form>
    <label for = "A">informe o valor de A:</label> 
    <input autofocus type= "number" id= "A" name = "A-value" placeHolder = "e.x: 15">
    <label for = "B">informe o valor de B:</label> 
    <input type= "number" id= "B" name = "B-value" placeHolder = "e.x: 30">
    <label for = "C">informe o valor de C:</label> 
    <input type= "number" id= "C" name = "C-value" placeHolder = "e.x: 30">
    <input type= "submit" value = "enviar" class= "btn">
</form>`

const A = document.querySelector("#A")
const B = document.querySelector("#B")
const C = document.querySelector("#C")
const enviar = document.querySelector(".btn")

enviar.addEventListener('click',(e)=>{
    e.preventDefault()
    const valores = {
        valueA : A.value,
        valueB : B.value,
        valueC : C.value
    }
    const teste = delta(valores.valueA,valores.valueB,valores.valueC)
    const XsResult = valorX(valores.valueB,teste,valores.valueA) 
    if(teste>=1){
        result.innerHTML = `<pre style = "font-size: 20px"> sua equação (${valores.valueB}<sup>2</sup> - 4.${valores.valueA}.${valores.valueC}) possui  o valor delta = ${teste}.
        
         equação  x1 = ${valores.valueB} + <span>&#8730;${teste}</span> / 2.${valores.valueA}   x2 = ${valores.valueB} - <span>&#8730;${teste}</span> / 2.${valores.valueA}. 
     
         X1 = ${XsResult.x1} e X2 = ${XsResult.x2}.</pre>`
    }else{
        result.innerHTML = `<pre style = "font-size: 20px"> sua equação (${valores.valueB}<sup>2</sup> - 4.${valores.valueA}.${valores.valueC}) possui  o valor delta = ${teste}.
        não será possível calcular o valor de x devido ao valor 
        de delta. 
        `
    }

})


function delta(a,b,c){
    return b**2-4*a*c 
}                 

function valorX(b,delta,a){
    return equaçao = {
        x1: ((-b)+delta**(1/2)) / (2*a),
        x2: ((-b)-delta**(1/2)) / (2*a) 
    }
}
 */



const form = document.querySelector('.container')
const result = document.querySelector('.result')
    
form.innerHTML = ` 
<form>
    <div class= "info">
        <label for = "preco">valor do produto:</label> 
        <input autofocus type= "text" id= "preco" name = "preco" placeHolder = "e.x: 15.99">
    </div>
    <div class= "buttons">
        <input type= "submit" value = "enviar" class= "btn">
        <input type= "reset" value = "resetar" class= "btn btn-reset">
    </div>
</form>`

const preco = document.querySelector('#preco')
const btnSend = document.querySelector('.btn')

btnSend.addEventListener('click',function (e) {
    e.preventDefault()
    const valor = parseFloat(preco.value).toFixed(2)
    const desconto = valor - ((valor/100)*5)
    const decimal = desconto.toFixed(2)
    const teste = decimal.toLocaleString('en-US', {style: 'percent'})
    result.innerHTML = `<p>parabéns!! você ganhou 5% de desconto, seu produto que chegou a custar R$${valor} agora passa a valer ${decimal} .</p>`
    
    
})

const decimal = 123434.3
const teste = decimal.toLocaleString('en-US', {style: 'percent'})
console.log(teste)




