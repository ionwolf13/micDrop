const songsUrl = 'http://localhost:3000/songs'
let allSongArray = []

async function getSongsTheFirstTime(){
    
    const response = await fetch(songsUrl)
    const songData = await response.json()
    songData.forEach(song =>{
        allSongArray.push(song)
    })

}
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("This is the song js file")
//     // // getSongsTheOriginalWay()
//     // songSectionFunction()
//     // getSongsTheFancyWay()
//     // renderEachSong()
    
// })

// *****************************************
// this is the original way we Fetch()
// function getSongsTheOriginalWay(){
    
//     fetch(songsUrl)
//     .then(res => res.json())
//     .then(songs => console.log(songs))
// console.log("The original way")
// }

// *****************************************
// this is the fancy way that Adam taught us to Fetch()
async function getSongsTheFancyWay(){
    
    const response = await fetch(songsUrl)
    const songData = await response.json()
    console.log("This is the Fancy Way")

    songData.forEach(song =>{
        renderEachSong(song)
    })

}

function renderTheSongSection(){
    indexBodySection.innerHTML = `
    <section class="song-wrapper">
                <h2>Choose A Song!</h2>
                    <div class="song-section">
                        
                    </div>
                    <button class="profile-button">Profile</button>
            </section>`
            getSongsTheFancyWay()
    let profileButton = document.querySelector(".profile-button")
    profileButton.addEventListener('click', () => {
        console.log("I was clicked")
        console.log(currentUser)
        console.log(status)
        fetchSingleUser()
    })

}

function renderEachSong(song){
    
    
    let {id,name,artist,difficulty,time,genre} = song
    console.log("We are inside the Render Each Song Part")
        

    let songSection = document.querySelector('.song-section')
    let singleSongCard = document.createElement('div')
    singleSongCard.className = `individual-song-section`

    let songName = document.createElement('h3')
    songName.className = "song"
    songName.id = "name"
    songName.innerText = `${name}`
    let songArtist = document.createElement('p')
    songArtist.className = "song"
    songArtist.id = "artist"
    songArtist.innerText = `Artist: ${artist}`
    let songGenre = document.createElement('p')
    songGenre.className = "song"
    songGenre.id = "genre"
    songGenre.innerText = `Genre: ${genre}`
    let songTime = document.createElement('p')
    songTime.className = "song"
    songTime.id = "time"
    songTime.innerText = `Time: ${time}`
    let songDifficulty = document.createElement('p')
    songDifficulty.className = "song"
    songDifficulty.id = "difficulty"
    songDifficulty.innerText = `Diff: ${difficulty}`
    let pushButton = document.createElement('button')
    pushButton.innerText = "Accept Challenge"
    pushButton.addEventListener('click',(event)=>{
        console.log("Challenge is Accepted!")
        console.log(song)
        songObjectInformation(song)
    })
    
    
    // console.log(singleSongCard)
    singleSongCard.append(songName,songArtist,songGenre,songTime,songDifficulty,pushButton)
    songSection.appendChild(singleSongCard)
    
}

function songObjectInformation(song){
    let {id,name,artist,difficulty,time,genre} = song
    console.log(name)
    console.log(artist)
    console.log(difficulty)
    console.log(genre)
    indexBodySection.innerHTML = ""
    renderChallengeSection(song)
}