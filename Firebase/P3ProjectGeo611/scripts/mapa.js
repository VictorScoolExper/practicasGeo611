const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) =>{
    if(user){

        listaloggedin.forEach(item => item.style.display = 'block');
        listaloggedout.forEach(item => item.style.display = 'none');
    } else {
        listaloggedin.forEach(item => item.style.display = 'none');
        listaloggedout.forEach(item => item.style.display = 'block');
    }

};




const obtieneAmigos = (data) => {
    console.log(data);
    var propiedades = { 
        center: { 
                    lat: 21.152639, lng: -101.711598 
                }, 
        zoom: 14 
    }

    var mapa =  document.getElementById("map")
    var map = new google.maps.Map(mapa, propiedades);

    data.forEach(doc => {
        informacion = new google.maps.InfoWindow;

        var pos = {
            lat: doc.data().coordenadas.lat,
            lng: doc.data().coordenadas.lng
        }

        informacion.setPosition(pos);
        informacion.setContent(doc.data().nombre);
        informacion.open(map);

    });

};