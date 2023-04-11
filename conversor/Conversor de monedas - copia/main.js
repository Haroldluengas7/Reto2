const boton = document.querySelector('button').addEventListener('click',() =>{
const valorCliente = parseFloat (document.getElementById('monto').value);

const opcion = document.querySelector('select');

const fetchMoneda = async() =>{
    const respuesta =  await fetch('https://mindicador.cl/api/');
    const info =   await respuesta.json();
let valorDolar = info.dolar.valor;
let valorEuro = info.euro.valor;
console.log

if (opcion.value == 'USD'){
    const respuesta = document.getElementById('resultado');
    respuesta.textContent = `El resultado fue: ${valorCliente/valorDolar}`
}else if(opcion.value == 'EUR'){
    const resp = document.getElementById('resultado');
    resp.textContent = `El resultado fue: ${valorCliente/valorEuro}`
}}

fetchMoneda();
});


const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            }
        }
    }
});
