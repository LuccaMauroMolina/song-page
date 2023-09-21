let email = document.getElementById("Gmail")
let btn = document.getElementById("btn")
let p = document.querySelector(".parrafo")
let form = document.getElementById("formulario")
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//email.value.length === 0 || !email.value.match(emailValidation)
let error = []

function validar(){

    btn.addEventListener("click", (e) => {
        
        error = []

        e.preventDefault()
        
        if(email.value.length === 0 || !email.value.match(emailValidation)){
            p.innerHTML = '<p>Por Favor ingresa el Email</p>'
        }else {
            alert("Email registrado")
            p.innerHTML = '<p>Email Ingresado</p>'
        }
        
    })
    }
    

validar()
/*
if (email == '' || email === undefined) {
    errors.push('Please provide us your email');
    // show error
    iconErrorEl.style.display = 'block';
    textErrorEl.innerText = errors[0];
  } else if (!email.match(RegEmail)) {
    errors.push('Please provide us your valid email');
    // show error icon
    iconErrorEl.style.display = 'block';
    textErrorEl.innerText = errors[0];
  }
*/