// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     setTimeout(() => {
//         alert("Hello")
//     }, 300)
// })



// const btn = document.getElementById("btn");

// const out = document.getElementById("out");

// btn.addEventListener("click", () => {
//     let sec = 0
//     setInterval(() => {
//         sec = sec + 1
//         out.textContent = sec
//     }, 1000)
// })



// const isName = document.getElementById("isName");
// const isSave = document.getElementById("isSave");
// const isClear = document.getElementById("isClear");

// const saved = localStorage.getItem("name")
// isName.value = saved

// isOut.textContent = saved ? saved : "-"

// isSave.addEventListener("click", () => {
//     const value = isName.value
//     localStorage.setItem("name", value)
//     isOut.textContent = value
// })

// isClear.addEventListener("click", () => {
//     const value = isClear.value
//     localStorage.removeItem("name", value)
//     isOut.textContent = value
// })





// __________COOCkIE______________________
// document.cookie = "name: Darxan, password:12341234"
// console.log(document.cookie)





// const welcome = document.getElementById("welcome")
// const resetVisited = document.getElementById("resetVisited")

// function getCookie(name) {
//     const found = document.cookie.split(":>").find(x => x.startsWith(name +
//         "="));

//     return found ? found.split("=")[1] : null;

// }

// const visited = getCookie("visited")

// if (visited === "true") {
//     welcome.textContent = "С возвращением, ты уже был здесь"
// } else {
//     welcome.textContent = "Добро пожаловать"
//     document.cookie = "visited=true; Max-Age=684800"
// }


// resetVisited.addEventListener("click", () => {
//     document.cookie = "visited=true; Max-Age=684800"
//     welcome.textContent = "Сброщено"
// })







// const Name = document.getElementById("Name");
// const Save = document.getElementById("Save");
// const text1 = document.getElementById("Text1");

// const NameSave = localStorage.getItem("Name")
// Name.value = NameSave

// let todos = JSON.parse(localStorage.getItem("todos") || "[]");

// function render() {
//     text1.innerHTML = "";
//     todos.forEach((text, index) => {
//         const li = document.createElement("li");
//         li.textContent = text1;

//         text1.appendChild(li);
//     });
// }

// Save.addEventListener("click", () => {
//     const value = Name.value.trim();
//     if (!value) return;

//     todos.push(value);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     Name.value = "";
//     render();
// });

// render();





// const input = document.getElementById("input");
// const addBtn = document.getElementById("add");
// const list = document.getElementById("list");

// let todos = JSON.parse(localStorage.getItem("todos") || "[]");

// function render() {
//     list.innerHTML = "";
//     todos.forEach((text, index) => {
//         const li = document.createElement("li");
//         li.textContent = text;

//         list.appendChild(li);
//     });
// }

// // 3) добавить задачу
// addBtn.addEventListener("click", () => {
//     const value = input.value.trim();
//     if (!value) return;

//     todos.push(value);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     input.value = "";
//     render();
// });

// render();




const Name = document.getElementById("Name");
const Save = document.getElementById("Save");
const text1 = document.getElementById("Text1");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function render() {
    text1.innerHTML = "";

    todos.forEach((text, index) => {
        const li = document.createElement("li");
        li.textContent = text;
        text1.appendChild(li);
    });
}

Save.addEventListener("click", () => {
    const value = Name.value.trim();
    if (!value) return;

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
    Name.value = "";
    render();
});

render();

const Delete = document.getElementById("Del");

Delete.addEventListener("click", () => {
    const value = Delete.value
    localStorage.removeItem("Del", value)
    text1.textContent = value

    function
})