//const listaEncuesta = document.querySelectorAll('.listaEncuesta');
//const mapActivate = document.querySelectorAll('.mapActivate');

const btnRevisarEnuesta = document.getElementById('btnRevisarEnuesta');

btnRevisarEnuesta.addEventListener('click',(e)=>{
    e.preventDefault();
    mapActivate.forEach(item => item.style.display = 'none');
    listaEncuesta.forEach(item => item.style.display = 'block');
});

const obtieneDiasEncuesta = (data) => {
    if(data.length){
        let html = '';

        data.forEach( doc => {
            const encuesta = doc.data();

            const columna =`
                            <div class="card" style="padding-top: 5px;" class="col-12">
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-12">
                                        <h6>Fecha de votos fueron ${Date(encuesta.timestamp)}</h6>
                                    </div>
                                    <div class="col-6">
                                        <h6>El rating del Guisado de ${encuesta.guisadoUno}</h6>
                                        <p>cantidad de votos para nivel 1: ${String(encuesta.gui1rating1)}</p>
                                        <p>cantidad de votos para nivel 2: ${String(encuesta.gui1rating2)}</p>
                                        <p>cantidad de votos para nivel 3: ${String(encuesta.gui1rating3)}</p>
                                    </div>
                                    <div class="col-6">
                                        <h6>El rating del Guisado de ${encuesta.guisadoDos}</h6>
                                        <p>cantidad de votos para nivel 1: ${String(encuesta.gui2rating1)} </p>
                                        <p>cantidad de votos para nivel 2: ${String(encuesta.gui2rating2)}</p>
                                        <p>cantidad de votos para nivel 2: ${String(encuesta.gui2rating3)}</p>
                                    </div>

                                    </div>
                                </div>
                            </div>
                            `;
                                         

            html += columna;

        });

        listadeEncuestas.innerHTML = html;
    } 
    else {
        listadeEncuestas.innerHTML = '<p class="text-center"> No hay resultados de encuesta </p>'
    }
};

const btnmapa = document.getElementById('btnmapa');

btnmapa.addEventListener('click',(e)=>{
    e.preventDefault();


    mapActivate.forEach(item => item.style.display = 'block');
    listaEncuesta.forEach(item => item.style.display = 'none');
});

const obtieneTrabajadores = (data) =>{

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
            lat: Number(doc.data().coordenadas.latitude),
            lng: Number(doc.data().coordenadas.longitude)
        };

        informacion.setPosition(pos);
        informacion.setContent(doc.data().nombre);
        informacion.open(map);

    });



 };