const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const loginSignUp = document.querySelector('.loginSign')
const errorMessage = document.querySelector('#errorMsg')
const selectBox = document.querySelector('.select')
const shortenBtn = document.querySelector('#shortenBtn')
const mainLinkText = document.querySelector('#mainLink')
const shortLinkText = document.querySelector('#shortLink')
const inputBox = document.querySelector('#input')
const copyButton = document.querySelector('#copyBtn')


// The toggle of the menu button
function toggleMenu(){
    menu.classList.toggle('open')
    loginSignUp.classList.toggle('open')
    menuBtn.classList.toggle('open')
}

// The manipulation of the links work here
function toogleLink(){
        
    let urlMain = inputBox.value
    fetch(`https://api.shrtco.de/v2/shorten?url=${urlMain}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        let dataMsg = data.result
        if(inputBox.value === ""){
            errorMessage.textContent = 'Please add a link..'
            selectBox.classList.remove('open')
        }else if(inputBox.addEventListener === true){
            errorMessage.textContent = 'Please add a link..'
            selectBox.classList.remove('open')
            console.log('Typing')
        }
        else{
            errorMessage.textContent = ""
            setTimeout(() => {
                shortLinkText.textContent = dataMsg.short_link
                mainLinkText.textContent = dataMsg.original_link
                selectBox.classList.add('open')
            }, 600)
            copyButton.addEventListener('click',()=>{
                navigator.clipboard.writeText(dataMsg.short_link)
                copyButton.textContent  = "Copied"
            })
        } 
    })
        .catch(err => console.log("error"))
}

// The API call function
menuBtn.addEventListener('click', toggleMenu)
shortenBtn.addEventListener('click', toogleLink)

// Clipboard function
