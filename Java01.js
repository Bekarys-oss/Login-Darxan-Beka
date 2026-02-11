const login = document.getElementById("login")
const password = document.getElementById("password")
const passwordPovtor = document.getElementById("passwordPovtor")

const loginRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRe = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.[A-Z])[0-9a-zA-Z!@#$%^&]{6,}$/;


function clearError() {
    login_2.textContent = "";
    password_2.textContent = "";
    password_2re.textContent = "";
}

function validate({ login, password, password_2 }) {
    const login = data.login;
    const password = data.password;
    const password_2 = data.password_2;
    let ok = true;
    if (!login) {
        login.textContent = "Введите Email"
        ok = false;
    } else if (!passwordRe.test(login)) {
        login.textContent = "Email не правильный"
        ok = false
    }

    if (!password) {
        passwordErr.textContent = "Введите Пароль";
        ok = false;
    } else if (!passwordErr.test(password)) {
        passwordErr.textContent = "Пароль слишком слабый";
        ok = false;
    }
    return ok
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    clearError();
    const fd = new FormData(form)
    const data = {
        email: String(fd.get("email") || "").trim(),
        password: String(fd.get("password") || "").trim(),
    }

    if (!validate(data)) return
})









// <!-- <script>
//     var bt1 = document.getElementById("txt")

//     var tx1 = document.getElementById("txt")

//     function reser(){
//         tx1.classList.remove("active")
//     }

//     bt1.addEventListener("click", function(){
//         reser();
//         tx1.classList.add("active")
//     }) -->