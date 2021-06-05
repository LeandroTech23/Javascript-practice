let alumnos = [ {
    nombre: "Leandro Espino",
    email: "leandro@gmail.com",
    materia: "fisica"
},{
    nombre: "Angelo",
    email: "Angelo@gmail.com",
    materia: "Quimica"
},{
    nombre: "Daniel",
    email: "Daniel@gmail.com",
    materia: "Algebra"
},{
    nombre: "Roberto",
    email: "Roberto@gmail.com",
    materia: "Matematica"
}];

const boton = document.querySelector(".btn-confirmar")

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let container = document.querySelector(".grid-container");
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`

    container.innerHTML += htmlCode;
}

boton.addEventListener("click", ()=>{
    let confirmar = confirm("Seguro que quieres confirmar las mesas?")
    if (confirmar) {
    document.body.removeChild(boton)
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos) {
        semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value;
    }
    }
    else {
        alert("Las mesas no se confirmaron")
    }
})