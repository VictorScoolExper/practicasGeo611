const btnMapa = document.getElementById('btnmapa');
const listaloggedInMap = document.querySelectorAll('.logged-in-map');

btnMapa.addEventListener('submit',(e)=>{
    e.preventDefault();

    listaloggedInMap.forEach( item => item.style.display = 'block');
    

});

