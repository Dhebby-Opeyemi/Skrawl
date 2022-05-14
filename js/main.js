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

let btnSend = document.getElementById('scroll-into-view');
let form = document.getElementsByClassName('form-container')[0];
btnSend.addEventListener('click', () =>{
    if(form.classList.contains('SignIn')) {
        form.classList.remove('SignIn')
        form.classList.add('SignUp')
        form.classList.remove('Forgot')
        btnSend.innerHTML = 'SignIn' ;
    } else {
        form.classList.remove('SignUp')
        form.classList.remove('Forgot')
        form.classList.add('SignIn')
        btnSend.innerHTML = 'SignUp' ;
    }
    // form.classList.toggle('SignIn')
});

let forgot = document.getElementById('forgot')

forgot.addEventListener('click', () => {
    if(form.classList.contains('SignIn')||form.classList.contains('SignUp')) {
        form.classList.remove('SignIn')
        form.classList.remove('SignUp')
        form.classList.add('Forgot')
        btnSend.innerHTML = 'SignUp' ;
    }
})