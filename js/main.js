const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

let btn = document.getElementById('scroll-into-view');
let into = document.getElementById('signup');


// For the Button to Change to Sign In After Clicking

let btnSend = document.querySelector('button');
btnSend.addEventListener('click', () =>{
    btnSend.innerHTML = `<a href="#signin" style="color:white";>SignIn</a>` ;
});

// btn.addEventListener('click',  (e)=> {
//     into.scrollIntoView(true);
// });

// const span = document.getElementById("text-content")
// span.addEventListener("click", () => {
//     span.textContent("Sign In");
// })