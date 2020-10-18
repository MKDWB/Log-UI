const emailField = document.querySelector("#email")
const passField = document.querySelector("#pass")
const buttonLogin = document.querySelector(".btn")

emailField.addEventListener("focus", happy)
passField.addEventListener("focus", hide)
buttonLogin.addEventListener("focus", go)
