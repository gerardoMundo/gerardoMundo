class Estudiante {
    constructor(nombre){
        this.nombre = nombre
    }
    asignatura = ["Javasccript", "HTML", "CSS"]
    
    getDatos() {
        return {nombre: this.nombre, asignatura: this.asignatura}
    }
}

const newEstudiante = new Estudiante("Gerardo Mundo");
console.log(newEstudiante);
console.log(newEstudiante.getDatos());