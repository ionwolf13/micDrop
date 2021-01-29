const indexBodySection = document.querySelector('body')

document.addEventListener('DOMContentLoaded', function(){
    getSongsTheFirstTime()
    // fetchUsers()
    indexBodySection.innerHTML =''
    welcomeFunction()
    // setTimeout(() => {
    //     indexBodySection.innerHTML =''
    //     welcomeFunction(); 
    // }, 10000);
    
    
})

function welcomeFunction(){
    
    indexBodySection.innerHTML = `
    <section class="welcome-wrapper">
        <h2 id="welcome-message">Welcome To MicDrop!</h2>
        <img src="image/micDroplogo.png" height=100%>
                <div class="welcome-section">
                        <div class="form-section">
                            
                        </div>
                        
                </div>
                <div class="enter-name-form">
                        <form class="name-form"> 
                                <input class="name-input" name="name" placeholder="Enter Name"> </input>
                                <input class="submit" name="submit" type="submit" value="submit">
                        </form>
                </div>
    </section>`
    

    let enterForm = document.querySelector('.name-form')
    enterForm.addEventListener('submit',(event) => {
        if (event.target.name.value == ''){
            event.preventDefault()
            welcomeFunction()
        }
        else{
        event.preventDefault()
        console.log(event.target.name.value)
        indexBodySection.innerHTML = ""
        fetchUsers(event.target.name.value)
        }
    })
    
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




function loaderHTMLJSFunction(){
    indexBodySection.innerHTML = ''
    indexBodySection.innerHTML = `
    <section class="loader-section">
    <div class="loader">
        <span style="--i:1;"> </span>
        <span style="--i:2;"> </span>
        <span style="--i:3;"> </span>
        <span style="--i:4;"> </span>
        <span style="--i:5;"> </span>
        <span style="--i:6;"> </span>
        <span style="--i:7;"> </span>
        <span style="--i:8;"> </span>
        <span style="--i:9;"> </span>
        <span style="--i:10;"> </span>
        <span style="--i:11;"> </span>
        <span style="--i:12;"> </span>
        <span style="--i:13;"> </span>
        <span style="--i:14;"> </span>
        <span style="--i:15;"> </span>
        <span style="--i:16;"> </span>
        <span style="--i:17;"> </span>
        <span style="--i:18;"> </span>
        <span style="--i:19;"> </span>
        <span style="--i:20;"> </span>
    </div>
</section>`

//     setTimeout(() => {
        
//         }, 10000);
}