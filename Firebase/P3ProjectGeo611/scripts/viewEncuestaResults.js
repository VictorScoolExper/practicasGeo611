const listadeEncuestas = document.getElementById('listadeEncuestas');

const obtieneDiasEncuesta = (data) => {
    if(data.length){
        let html = '';

        data.forEach( doc => {
            const encuesta = doc.data();

            const columna =`
                            <div class="card" class="col-4">
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-12">
                                        <h6>${Date(encuesta.timestamp)}</h6>
                                    </div>
                                    <div class="col-6">
                                        <h6>Guisado de ${encuesta.guisadoUno}</h6>
                                        <p>rating 1: ${String(encuesta.gui1rating1)}</p>
                                        <p>rating 1: ${String(encuesta.gui1rating2)}</p>
                                        <p>rating 1: ${String(encuesta.gui1rating3)}</p>
                                    </div>
                                    <div class="col-6">
                                        <h6>Guisado de ${encuesta.guisadoDos}</h6>
                                        <p>rating 1: ${String(encuesta.gui2rating1)} </p>
                                        <p>rating 1: ${String(encuesta.gui2rating2)}</p>
                                        <p>rating 1: ${String(encuesta.gui2rating3)}</p>
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