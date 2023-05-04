/* ajustar data */

const dataDeHoje = document.querySelector(".data")
console.log(dataDeHoje)

const data = new Date()
const fullYear = data.getFullYear()

dataDeHoje.innerHTML = ` copyright ${fullYear}`





















