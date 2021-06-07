
let boton = document.getElementById("boton");
boton.addEventListener("click", promediar);
let container2 = document.querySelector(".container2")
container2.addEventListener("click", desaparecer)


function promediar() {
    let mensaje = document.getElementById("message");
    mensaje.innerHTML = "";
    let resultado;
    let nota = document.getElementById("nota").value;
    container2.style.display = "flex"
    container2.style.animation = "aparecer 1s forwards"
    try {
        nota = parseInt(nota);
        if (isNaN(nota)) throw "No es un número";
        if (nota > 20) throw "Excedio la nota maxima"; 
        if (nota < 0) throw "Excedio la nota minima";
        if (nota == "") throw "No ha ingresado ninguna nota";
        resultado = (nota + 15 + 15) / 3;
        mensaje.innerHTML = `El promedio final es ${Math.round(resultado)}`
        if (resultado < 11) {
            mensaje.innerHTML += "<br><br>El alumno está <span class= 'red'> reprobado</span>"
        }
        if (resultado > 11) {
            mensaje.innerHTML += "<br><br>El alumno está <span class= 'green'> aprobado</span>"
        }
    }
    catch (err) {
        mensaje.innerHTML = err;
    }


}

function desaparecer() {
    container2.style.display = "none"
}