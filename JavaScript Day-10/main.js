let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourForm")
let ourList = document.getElementById("ourList")
ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
  createItem(ourField.value)
})
function createItem(x) {
    ourList.insertAdjacentHTML("beforeend", x)
}
let ourHTML = `<li>${x} <button>Delete</button></li>`
