let miImagen = document.querySelector('img');
miImagen.onclick = function(){
	let miSrc = miImagen.getAttribute('src');
	if (miSrc === 'images/pugordo1.jpg') {
		miImagen.setAttribute('src','images/pugnegro.jpg');
    }else {
		miImagen.setAttribute('src', 'images/pugordo1.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
	if(!miNombre) {
		estableceNombreUsuario();
	} else {
		localStorage.setItem('nombre', miNombre);
		miTitulo.textContent = '¡Hola,' + miNombre+'!';
	}
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = '¡Hola,' + nombreAlmacenado+'!';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}