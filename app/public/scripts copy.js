const botones = document.querySelectorAll('.btn')
let array = [];
let cont = 0

botones.forEach((element) => {
    element.addEventListener('click', async (e) => {
        cont += 1;
        const card = e.target.closest(".card > .card-body");
        console.log(card.firstElementChild.textContent);
        console.log(card.lastElementChild.querySelector('span'));
        card.lastElementChild.querySelector('span').textContent = `${cont}`;
        //span.innerText = `${cont1}`;
        //card.lastElementChild.appendChild(span);
    });
})

function agregarAlChango(array, menu) {
    array.push({ menu: menu });
}

const enviar = document.querySelector('#enviar')
enviar.addEventListener('click', async (e) => {
    if (cont > 6) {
        alert('No puedes agregar mas de 5');
    }
})