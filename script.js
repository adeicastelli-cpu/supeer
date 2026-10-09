

let listaDeSuper = [];

listaDeSuper[0] = "medialunas";
listaDeSuper[1] = "chocotorta";
listaDeSuper[2] = "globos";

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

console.log("Producto eliminado del final:", noHabia);
console.log("Producto eliminado del principio:", comprado);

console.log("Tamaño final de la lista:", listaDeSuper.length);




function logItems(arreglo) {
    arreglo.forEach((producto, indice) => {
        console.log(indice + ": " + producto);
    });
}

let comando = "";

while (comando !== "salir") {

    comando = prompt(
        "Acá podés hacer tu lista y modificarla.\n\n" +
        "Escribí una opción:\n" +
        "agregar producto\n" +
        "borrar producto\n" +
        "listar\n" +
        "salir"
    );

    if (comando === null) {
        break;
    }

    comando = comando.toLowerCase().trim();

    if (comando === "agregar producto") {

        let producto = prompt("¿Qué producto querés agregar?");

        if (producto !== null && producto.trim() !== "") {
            listaDeSuper.push(producto.trim());
            console.log("Producto agregado: " + producto.trim());
        }

    } else if (comando === "listar") {

        logItems(listaDeSuper);

    } else if (comando === "borrar producto") {

        let indice = Number(
            prompt("Ingresá el número del producto que querés borrar:")
        );

        if (
            Number.isInteger(indice) &&
            indice >= 0 &&
            indice < listaDeSuper.length
        ) {
            let productoBorrado = listaDeSuper.splice(indice, 1);
            console.log("Producto eliminado: " + productoBorrado[0]);
        } else {
            console.log("Índice inválido.");
        }

    } else if (comando === "salir") {

        console.log("¡Gracias por usar tu lista de súper!");

    } else {

        alert("Opción no válida. Probá con una de las opciones indicadas.");
    }
}
