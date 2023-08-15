let email = document.getElementById("Gmail")
let btn = document.getElementById("btn")
let p = document.getElementById("parrafo")

function validar(){
    btn.addEventListener("click", () => {

        let correcto = "gmail"
        
        if(email == correcto){
            console.log("tijhshtpspis")
        }else {
            p.innerHTML = '<p>es incorrecto</p>'
        }
        
        
    })
    }
    

validar()