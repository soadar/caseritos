let array = [];
let cont1 = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
let cont5 = 0

document.querySelector('.menu1').addEventListener('click', async (e) => {
    if (checkTotal()) {
        cont1 += 1;
        const card = e.target.closest(".card > .card-body");
        //console.log(card.firstElementChild.textContent);
        //console.log(card.lastElementChild.querySelector('span'));
        card.lastElementChild.querySelector('span').textContent = `${cont1}`;
    }
});

document.querySelector('.menu2').addEventListener('click', async (e) => {
    if (checkCantidad() && checkTotal()) {
        cont2 += 1;
        const card = e.target.closest(".card > .card-body");
        card.lastElementChild.querySelector('span').textContent = `${cont2}`;
    }
});

document.querySelector('.menu3').addEventListener('click', async (e) => {
    if (checkCantidad() && checkTotal()) {
        cont3 += 1;
        const card = e.target.closest(".card > .card-body");
        card.lastElementChild.querySelector('span').textContent = `${cont3}`;
    }
});

document.querySelector('.menu4').addEventListener('click', async (e) => {
    if (checkCantidad() && checkTotal()) {
        cont4 += 1;
        const card = e.target.closest(".card > .card-body");
        card.lastElementChild.querySelector('span').textContent = `${cont4}`;
    }
});

document.querySelector('.menu5').addEventListener('click', async (e) => {
    if (checkCantidad() && checkTotal()) {
        cont5 += 1;
        const card = e.target.closest(".card > .card-body");
        card.lastElementChild.querySelector('span').textContent = `${cont5}`;
    }
});

function checkCantidad() {
    let contVar = cont2 + cont3 + cont4 + cont5;
    if (contVar >= 3) {
        alert("No se pueden elegir mas de 3 menus especiales")
        return false;
    }
    return true;
}
function checkTotal() {
    let total = cont1 + cont2 + cont3 + cont4 + cont5;
    if (total >= 5) {
        alert("No se pueden elegir mas de 5 menus")
        return false
    } else {
        return true;
    }
}

function agregarAlChango(array, menu) {
    array.push({ menu: menu });
}

const enviar = document.querySelector('#enviar')
enviar.addEventListener('click', async (e) => {
    const total = cont1 + cont2 + cont3 + cont4 + cont5;
    if (total === 0) {
        alert("No elegiste nada bobo, anda pa alla")
    } else if (total == 0) {
        alert('No puedes agregar mas de 5');
    } else {
        alert("Pedido enviado, el oso te llevara la comida")
    }
})