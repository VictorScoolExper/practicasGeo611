const btnMapa = document.getElementById('btnmapa');
const listaloggedInMap = document.querySelectorAll('.logged-in-map');

btnMapa.addEventListener('submit',(e)=>{
    e.preventDefault();

    listaloggedInMap.forEach( item => item.style.display = 'block');

    db.collection('usuarios').onSnapshot(snapshot =>{
        obtieneAmigos(snapshot.docs);
    }, err => {
        console.log(err.message);
    });
    

});

const obtieneAmigos = (data) =>{

    var propiedades = { 
        center: { 
                    lat: 21.152639, lng: -101.711598 
                }, 
        zoom: 14 
    }

    var mapa =  document.getElementById("map")
    var map = new google.maps.Map(mapa, propiedades);


    data.forEach( doc => {
        
        informacion = new google.maps.InfoWindow;

        var pos = { 
            lat: doc.data().coordenadas.latitude,
            lng: doc.data().coordenadas.longitude
        };

        informacion.setPosition(pos);
        informacion.setContent(doc.data().nombre);
        informacion.open(map);

    });

 };

