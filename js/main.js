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

//var signin = document.getElementById("signin");
//var button = document.getElementById("showin");

//button.onClick = function() {
 //   if(signin.className == "open"){
   //     signin.className == "";
     //   button.innerHTML = "SignUp"
    //} else{
        
      //  signin.className == "open"
        //button.innerHTML = "SignIn"
    //}
//};