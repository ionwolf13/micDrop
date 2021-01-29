const BASE_URL = "http://localhost:3000/users"
let allUserArr = []
let currentUser = ""
let status = null


function fetchUsers(userName){

    loaderHTMLJSFunction()
    setTimeout(() => {        
    renderUserSection()
    fetch(BASE_URL)
    .then(res => res.json())
    .then(users => findUser(users,userName))
    }, 10000);
}

function fetchSingleUser(){
    renderUserSection()
    console.log(BASE_URL+`/${currentUser.id}`)
    fetch(BASE_URL+`/${currentUser.id}`)
    .then(res => res.json())
    .then(res => renderUser(res))
}

function renderUserSection(){
    indexBodySection.innerHTML = `
    <section class="profile-wrapper">
    <h2 class="profile-message">Profile</h2>
        <div class="profile-section">
            
        </div>
        <div class="profile-challenges">
            <h2 class="profile-challenge-message">Challenges</h2>
                <div class="challenges-completed">
                    <h3 class="challenges-completed-message">Finished:</h3>
                </div>
                <div class="challenges-to-be-completed">
                    <h3 class="challenges-to-be-completed-message">To be Started:</h3>
                </div>
        </div>
        <div class="checkout-songs">
            <p>Check Out Our Songs!</p>
            <button class="checkout-songs-button">Songs</button>
        </div>
        <div class="checkout-challengers">
            <p>Challenge Others!</p>
            <button class="checkout-challengers">Challengers</button>
        </div>
    </section>`
    let songsButton = document.querySelector(".checkout-songs-button")
    songsButton.addEventListener('click', () => {
        console.log("I was clicked")
        renderTheSongSection()
    })
    let challengersButton = document.querySelector(".checkout-challengers")
    challengersButton.addEventListener('click', () => {
        otherChallengers()
        
    })
}

function renderUser(user){
    // console.log(user)
    if(user === currentUser){
        let challengesSection = document.querySelector('.challenges-completed')
    
        user.challenges.forEach(challenge => {
            let songChallenge = document.createElement('p')
            // console.log(allSongArray.find(song => song.id == challenge.song_id))
            songChallenge.innerText = (allSongArray.find(song => song.id == challenge.song_id).name)
            challengesSection.appendChild(songChallenge)
        
        })

        
        let challengesToStart = document.querySelector('.challenges-to-be-completed')
    
        let songChallenge = document.createElement('p')
        // console.log(allSongArray.find(song => song.id == challenge.song_id))
        songChallenge.innerText = "Challenges to Be Completed Will be Inserted Here"
        challengesToStart.appendChild(songChallenge)
    }
    


    
    let div = document.querySelector(".profile-section")
    let userDiv = document.createElement("div")
    div.appendChild(userDiv)


    userDiv.classList.add("flip-card")
    userDiv.innerHTML = `
            <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src="${user.image}" height=100%>
            </div>
            <div class="flip-card-back">
            <h1>${user.name}</h1>
            <p>Hobbies: Singer</p>
            <p>Rating: 4.5</p>
            </div>
            </div>`

}

function findUser(users,userName){
    allUserArr = users.map(user => user)
    status = (users.find(user => (userName == user.name)))
    if (status === undefined){
        createNewUser(userName)
    }
    else{
        currentUser = status
        console.log('we found the user')
        console.log("this is the current status")
        console.log(status)
        
        renderUser(currentUser)
    }
    
}


function createNewUser(userName){
    console.log('dont exist so we here')
    let newUser = {
        name: userName,
        image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    }

    let reqPackage = {
        headers: {'content-type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(newUser)
    }
    console.log('we are about to create you')
    fetch(BASE_URL, reqPackage)
    .then(res => res.json())
    .then(res => console.log(res))

}


function otherChallengers(){
    loaderHTMLJSFunction()
    setTimeout(() => {
        
                
    console.log("here are the others")
    indexBodySection.innerHTML = `
    <section class="profile-wrapper">
    <h2 class="profile-message">Profiles</h2>
        <div class="profile-section">
            
        </div>
        <div class="checkout-songs">
            <p>Check Out Our Songs!</p>
            <button class="checkout-songs-button">Songs</button>
        </div>
        <div class="current-profile">
            <p>Back To Profile</p>
            <button class="profile-button">Profile</button>
        </div>
    </section>`
    let songsButton = document.querySelector(".checkout-songs-button")
    songsButton.addEventListener('click', () => {
        console.log("I was clicked")
        renderTheSongSection()
    })
    let profileButton = document.querySelector(".profile-button")
    profileButton.addEventListener('click', () => {
        console.log("i clicked the back to profile button")
        fetchSingleUser()
    })
    allUserArr.forEach(user => {
        if(user !== currentUser){
            renderUser(user)
        }
    })
}, 10000);
}