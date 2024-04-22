import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let precioElemento = document.getElementById('precio');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

console.log(enlaces);

// agregar evento click a cada enlace 
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() { 
        // Remover Active
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        })
        
        // Agregar Active al que corresponda
        enlace.classList.add('active');
        
        // Traer la informacion del objeto que se eligio
        let ciudad = ObtenerCiudad(enlace.textContent)
        
        // Mostrar en contenido en el DOM
        tituloElemento.innerHTML = ciudad.titulo;
        precioElemento.innerHTML = ciudad.precio;
        subtituloElemento.innerHTML = ciudad.subtitulo;
        parrafoElemento.innerHTML = ciudad.parrafo;
    })
} 
);

// Traer informacion
function ObtenerCiudad(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}