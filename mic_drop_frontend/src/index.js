const indexBodySection = document.querySelector('body')

document.addEventListener('DOMContentLoaded', function(){
    console.log("This is the index.js")
    
    // fetchUsers()
    indexBodySection.innerHTML = ''
    welcomeFunction()
    
    
})

function welcomeFunction(){
    indexBodySection.innerHTML = `
    <section class="welcome-wrapper">
        <h2 id="welcome-message">Welcome To MicDrop!!!</h2>
                <div class="welcome-section">
                        <div class="form-section">
                            <form class="name-form"> 
                                <input class="name-input" name="name" placeholder="Enter Name"> </input>
                                <input class="submit" name="submit" type="submit" value="submit">
                            </form>
                        </div>
                </div>
    </section>`
    
    console.log("Heelo there! is this first?")
    console.log(indexBodySection)
    let enterForm = document.querySelector('.name-form')
    enterForm.addEventListener('submit',(event) => {
        console.log("Clicked")
        event.preventDefault()
        console.log(event.target.name.value)
        indexBodySection.innerHTML = ""
        renderTheSongSection()
        
        
    })
    fetchUsers()
}

// Reference to Push To GitHub
// cd <repo_name>
// git remote -v
// git init
// git add . 
// git commit -m "message"
// git push

// git checkout -b <branch-name>
// git commit -m "initial comment"
// git push -u origin <branch-name>