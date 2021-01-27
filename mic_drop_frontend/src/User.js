function fetchUsers(){
    fetch('http://localhost:3000/users')
    .then(res => res.json()) 
    .then(users => {
        users.forEach(renderUser)
    })
}

function renderUser(user){
    console.log(user)
    let div = document.querySelector(".challenge-section")
    let userDiv = document.createElement("div")
    div.appendChild(userDiv)

    userDiv.classList.add("ui", "card")
    userDiv.innerHTML = `
            <div class="image">
            <img src="https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png">
        </div>
        <div class="content">
            <a class="header">${user.name}</a>
            </div>`
}