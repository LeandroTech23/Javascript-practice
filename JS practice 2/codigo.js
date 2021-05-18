const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const materia = document.querySelector(".materia");
const boton = document.querySelector(".btn-enviar");
const valid = document.querySelector(".valid");


boton.addEventListener("click", (e)=> {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        valid.innerHTML = error[1];
        valid.classList.add("red");
        valid.classList.remove("green");
    }
    else {
        valid.innerHTML = "El formulario ha sido enviado exitosamente";
        valid.classList.add("green");
        valid.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.lenght < 5 || nombre.value.lenght > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if (email.value.lenght < 5 || 
             email.value.lenght > 40||
             email.value.indexOf("@") == -1 ||
             email.value.indexOf(".") == -1) {
        error [0] = true;
        error [1] = "El mail no es valido";
        return error;
    } else if (materia.value.lenght < 5 || materia.value.lenght > 20) {
        error [0] = true;
        error [1] = "El curso no es valido";
        return error;
    }

    error[0] = false;
    return error;
    

}