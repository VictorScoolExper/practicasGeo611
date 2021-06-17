const listadeEncuestas = document.getElementById('listadeEncuestas');

const obtieneDiasEncuesta = (data) => {
    if(data.length){
        let html = '';

        data.forEach( doc => {
            const encuesta = doc.data();

            const columna =`
                <div class="col-12 col-md-4">
                    <h4>${encuesta.timestamp}</h4>
                    
                    <div class="col-6">
                        <div class="col-12">
                            <p class="text-danger">Platillo del #1 ${encuesta.guisadoUno}</p> 
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 1 ${encuesta.gui1rating1} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 2 ${encuesta.gui1rating2} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 3 ${encuesta.gui1rating3} />
                        </div>
                    
                    </div> 

                    <div class="col-6">
                        <div class="col-12">
                            <p class="text-danger">Platillo del #1 ${encuesta.guisadoDos}</p> 
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 1 ${encuesta.gui2rating1} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 2 ${encuesta.gui2rating2} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 3 ${encuesta.gui2rating3} />
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