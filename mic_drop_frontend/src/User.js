const BASE_URL = "http://localhost:3000/users"

let currentUser = ""

function fetchUsers(){
    fetch(BASE_URL)
    .then(res => res.json()) 
    .then((users) => {
        // users.forEach(renderUser)
        debugger
        currentUser = users
        // console.log(users))
    })
}

function renderUser(user){
    // console.log(user)
    let div = document.querySelector(".challenge-section")
    let userDiv = document.createElement("div")
    div.appendChild(userDiv)


    userDiv.classList.add("flip-card")
    userDiv.innerHTML = `
            <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src=${user.image} height=100%>
            </div>
            <div class="flip-card-back">
            <h1>${user.name}</h1>
            </div>
            </div>`

}