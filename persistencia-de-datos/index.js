var nombre = "Gerardo";
var apellido = "Mundo";
var nombreApellido = {
    nombre: nombre,
    apellido: apellido
};

localStorage.setItem("objeto", JSON.stringify(nombreApellido));
sessionStorage.setItem("objeto2", JSON.stringify(nombreApellido));

const fecha = new Date(2022, 06, 26);

document.cookie = "nombreCookie=nombre, expires=" + fecha.setMinutes(2);