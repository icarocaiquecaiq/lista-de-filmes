/* data de hoje */
const calen = document.querySelector(".data")
const realDate = new Date()
const year = realDate.getFullYear()
calen.innerHTML = `copyright ${year}`

