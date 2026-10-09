
let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "leche";
listaDeSuper[2] = "arroz";

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log(listaDeSuper[ultimoElemento]);




listaDeSuper.push("fideos");
listaDeSuper.push("tomate");

listaDeSuper.unshift("pan");
listaDeSuper.unshift("queso");

console.log("Cantidad total de productos:", listaDeSuper.length);

let noHabia = listaDeSuper.pop();

let comprado = listaDeSuper.shift();

console.log("Producto removido del final:", noHabia);
console.log("Producto removido del principio:", comprado);

console.log("Tamaño final de la lista:", listaDeSuper.length);



function logItems(arreglo) {
    arreglo.forEach((producto, indice) => {
        console.log(indice + ": " + producto);
    });
}

let comando = "";

while (comando !== "salir") {

    comando = prompt(" Hace tu lista! argegar producto, listar, borrar producto o salir");

    if (comando === "nuevo") {

        let producto = prompt("Ingresá el producto:");
        listaDeSuper.push(producto);

        console.log("Producto agregado: " + producto);

    } else if (comando === "listar") {

        logItems(listaDeSuper);

    } else if (comando === "borrar") {

        let indice = Number(prompt("Ingresá el índice del producto que querés borrar:"));

        if (indice >= 0 && indice < listaDeSuper.length) {

            let productoBorrado = listaDeSuper.splice(indice, 1);

            console.log("Producto eliminado: " + productoBorrado);

        } else {

            console.log("Índice inválido.");
        }

    } else if (comando === "salir") {

        console.log("Programa finalizado.");

    } else {

        console.log("Comando inválido.");
    }
}