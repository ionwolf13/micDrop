let challengeURL = 'http://localhost:3000/challenges'


function renderChallengeSection(song){
    
    indexBodySection.innerHTML = `
    <section class="challenge-wrapper">
            <div class="challenge-section">
                <h3>Accept Challenge for ${song.name}?</h3>
                <form class="challenge-question">
                    <button class="yes-button" name="yes-button" value="yes">Yes</button>
                    <button class="no-button" name="no-button" value="no">No</button>
                </form>
            </div> 
    </section>`
    let yesButton = document.querySelector('.yes-button')
    yesButton.addEventListener('click', (event) => {
        createChallengeQuestion(event,song)
        event.preventDefault()
    })

    let noButton = document.querySelector('.no-button')
    noButton.addEventListener('click', (event) => {
        createChallengeQuestion(event,song)
        event.preventDefault()
        
    })
    
}
function createChallengeQuestion(event,song){
    console.log(event.target.value)
    if(event.target.value === 'yes'){
        console.log("Yes I Accept")
        addNewChallengeToUser(song)
    }
    else if(event.target.value === 'no'){
        console.log("I dont wanna!")
        renderTheSongSection()
    }

}


function addNewChallengeToUser(song){
    indexBodySection.innerHTML = `
    <section class="challenge-wrapper">
            <div class="challenge-section">
                <h2>${currentUser.name}, will you take on ${song.name}</h2>
                <div class="confirm-challenge-section-profile">
                    
                </div>
                <form class="challenge-question">
                    <button class="yes-button" name="yes-button" value="yes">Now</button>
                    <button class="no-button" name="no-button" value="no">Later</button>
                </form>
                
            </div> 
    </section>`
    let yesButton = document.querySelector('.yes-button')
    yesButton.addEventListener('click', (event) => {
        createChallengeJoinerObject(event,song)
        event.preventDefault()
    })

    let noButton = document.querySelector('.no-button')
    noButton.addEventListener('click', (event) => {
        createChallengeJoinerObject(event,song)
        renderTheSongSection()
        event.preventDefault()
        
    })


    function createChallengeJoinerObject(event,song){
        
        let newChallenge = {
            song_id: song.id,
            user_id: currentUser.id
        }
        
        let reqPackage = {
            headers: {'content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(newChallenge)
        }

        fetch(challengeURL, reqPackage)
        .then(res => res.json())
        .then(res => console.log(res))

        if(event.target.value == 'yes'){
            console.log("we are going to post")
            
        }
        else if(event.target.value == 'no'){
            console.log("we weon't post")
            
        }
    }
}


