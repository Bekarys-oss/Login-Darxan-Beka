// const form = document.getElementById("regform");

// const emailErr = document.getElementById("emailErr")
// const passwordErr = document.getElementById("passwordErr");



// const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRe = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.[A-Z])[0-9a-zA-Z!@#$%^&]{6,}$/;



// function clearError() {
//     emailErr.textContent = "";
//     passwordErr.textContent = "";
// }

// function validate({ email, password }) {
//     const email = data.email;
//     const password = data.password;
//     let ok = true;
//     if (!email) {
//         emailErr.textContent = "Введите Email"
//         ok = false;
//     } else if (!emailRe.test(email)) {
//         emailErr.textContent = "Email не правильный"
//         ok = false
//     }

//     if (!password) {
//         passwordErr.textContent = "Введите Пароль";
//         ok = false;
//     } else if (!passwordErr.test(password)) {
//         passwordErr.textContent = "Пароль слишком слабый";
//         ok = false;
//     }
//     return ok
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     clearError();
//     const fd = new FormData(form)
//     const data = {
//         email: String(fd.get("email") || "").trim(),
//         password: String(fd.get("password") || "").trim(),
//     }

//     if (!validate(data)) return
// })