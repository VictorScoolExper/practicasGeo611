const listadeEncuestas = document.getElementById('listadeEncuestas');

const obtieneDiasEncuesta = (data) => {
    if(data.length){
        let html = '';

        data.forEach( doc => {
            const encuesta = doc.data();
            pos = {
                lat : encuesta.coords.lat,
                lng : encuesta.coords.lng
            };
            const columna =`
                            <div class="card" class="col-4">
                                <div class="text-center" id="map" style="height: fit-content;">
                                    VA IR AL MAPA
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-12">
                                        <h6>${Date(encuesta.timestamp)}</h6>
                                    </div>
                                    <div class="col-6">
                                        <h6>${encuesta.guisadoUno}</h6>
                                        <p>rating 1: ${String(encuesta.gui1rating1)}</p>
                                        <p>rating 1: ${String(encuesta.gui1rating2)}</p>
                                        <p>rating 1: ${String(encuesta.gui1rating3)}</p>
                                    </div>
                                    <div class="col-6">
                                        <h6>${encuesta.guisadoDos}</h6>
                                        <p>rating 1: ${String(encuesta.gui2rating1)} </p>
                                        <p>rating 1: ${String(encuesta.gui2rating2)}</p>
                                        <p>rating 1: ${String(encuesta.gui2rating3)}</p>
                                    </div>

                                    </div>
                                </div>
                            </div>
                            `;
                            var propiedades = { 
                                center: { 
                                            lat: 21.152639, lng: -101.711598 
                                        }, 
                                zoom: 14 
                            }
                         
                            var mapa =  document.getElementById("map")
                            var map = new google.maps.Map(mapa, propiedades);
                         
                         
                                
                                informacion = new google.maps.InfoWindow;
                         
                                informacion.setPosition(pos);
                                informacion.setContent(data.nombre);
                                informacion.open(map);
                         
                

            html += columna;

        });

        listadeEncuestas.innerHTML = html;
    } 
    else {
        listadeEncuestas.innerHTML = '<p class="text-center"> No hay resultados de encuesta </p>'
    }
};