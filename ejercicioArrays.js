const listaCompras = ["Jabon", "Cereal", "Jamon", "Verduras", "Fruta"];
listaCompras.push("Aceite de girasol");
//console.log(listaCompras);
listaCompras.pop();

const pelis = [
    {titulo: "Alien", director: "R. Scott", fecha: 1979},
    {titulo: "Terminator", director: "J. Cameron", fecha: 1984},
    {titulo: "The thing", director: "J. Carpenter", fecha: 1982}
];

const titulos = pelis.map(e => e.titulo);

const filtrado = pelis.filter(e => e.fecha >= 2010);

const directores = pelis.map(e => e.director);

const concat = directores.concat(titulos);

const concatSpread = [...directores, ...titulos];
console.log(concatSpread)