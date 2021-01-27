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
        createChallengeQuestion(event)
        event.preventDefault()
    })

    let noButton = document.querySelector('.no-button')
    noButton.addEventListener('click', (event) => {
        createChallengeQuestion(event)
        event.preventDefault()
    })
    
}
function createChallengeQuestion(event){
    
    console.log(event.target.value)
    if(event.target.value === 'yes'){
        console.log("Yes I Accept")
        addNewChallengeToUser()
    }
    else if(event.target.value === 'no'){
        console.log("I dont wanna!")
        renderTheSongSection()
    }

}


function addNewChallengeToUser(){
    console.log("lets add your challenge")
}


