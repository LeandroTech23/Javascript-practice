const contenedor = document.querySelector('.flex-container')



function crearLlave(nombre, modelo, precio) {
    img = '<img src="llave.png">';
    nombre = `<h2>${nombre} </h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `Precio: $${precio}`;
    return [img, nombre, modelo, precio];
}

let fragmentado = document.createDocumentFragment();


for (var i = 1; i <= 20; i++) {
    
    let modeloRandom = Math.round(Math.random()*10 + 30);
    let precioRandom = Math.round(Math.random()*10000);
    let llave = crearLlave(`Llave ${i}`, `Modelo: ${modeloRandom}`, `Precio: ${precioRandom}`)
    let div = document.createElement('DIV');
    div.classList.add('flex-item');
    div.tabIndex = i;
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmentado.appendChild(div)
    
}

contenedor.appendChild(fragmentado)