const listloggedout = document.querySelectorAll('.logged-out');
const listloggedin = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) =>{
    if(user){

        listloggedin.forEach(item => item.style.display = 'block');
        listloggedout.forEach(item => item.style.display = 'none');
    } else {
        listloggedin.forEach(item => item.style.display = 'none');
        listloggedout.forEach(item => item.style.display = 'block');
    }

};




const obtieneAmigos = (data) => {
    console.log(data);
    var propiedades = { 
        center: { 
                    Latitude: 21.152639, Longitude: -101.711598 
                }, 
        zoom: 14 
    }

    var mapa =  document.getElementById("map")
    var map = new google.maps.Map(mapa, propiedades);

    data.forEach(doc => {
        informacion = new google.maps.InfoWindow;

        var pos = {
            Latitude: doc.data().coordenadas.Latitude,
            Longitude: doc.data().coordenadas.Longitude
        }

        informacion.setPosition(pos);
        informacion.setContent(doc.data().nombre);
        informacion.open(map);

    });

};