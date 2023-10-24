const form = document.querySelector("form")
const Email = document.querySelector("#email")
const Password = document.querySelector("#password")
const show = document.querySelector("#show")
const natija = document.querySelector(".natija")

form.addEventListener("submit", formSubmit)
console.log(window)
function formSubmit(e) {
    e.preventDefault()
    let kirishEmail = "ali@gmail.com"
    let kirishParoli = "123456"
    if (kirishEmail === Email.value && kirishParoli === Password.value) {
        natija.innerHTML = "Saytga hush kelibsiz"
        setTimeout(() => {
            window.location.pathname = "/home"
            localStorage.setItem("key", true)
        }, 3000);
    } else {
        natija.innerHTML = "parol yoki login noto'g'ri"

        setTimeout(() => {
            natija.innerHTML = ""
        }, 5000);
    }
    Email.value = ""
    Password.value = ""
}


show.addEventListener("change", function () {
    let checkbox = show.checked
    if (checkbox) {
        Password.type = "text"
    } else {
        Password.type = "password"
    }
})