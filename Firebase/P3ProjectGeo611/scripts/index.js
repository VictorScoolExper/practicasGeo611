const listadeEncuestas = document.getElementById('listadeEncuestas');

const obtieneDiasEncuesta = (data) => {
    if(data.length){
        let html = '';

        data.forEach( doc => {
            const encuesta = doc.data();

            const columna =`
                <div class="col-12 col-md-4">
                    <h4>${encuesta.fecha}</h4>
                    
                    <div class="col-6">
                        <div class="col-12">
                            <p class="text-danger">Platillo del #1 ${encuesta.nombreGuisadoUno}</p> 
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 1 ${encuesta.cali1One} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 2 ${encuesta.cali1Two} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 3 ${encuesta.cali1Three} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 3 ${encuesta.cali1Four} />
                        </div>
                    
                    </div> 

                    <div class="col-6">
                        <div class="col-12">
                            <p class="text-danger">Platillo del #1 ${encuesta.nombrePlatilloTwo}</p> 
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 1 ${encuesta.cali2One} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 2 ${encuesta.cali2Two} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 3 ${encuesta.cali2Three} />
                        </div>

                        <div class="col-3">
                            <p Puntos menos de 3 ${encuesta.cali2Four} />
                        </div>
                    
                    </div> 
                    
                    
                </div>
            
            `;

            html += columna;

        });

        listadeEncuestas.innerHTML = html;
    } 
    else {
        listadeEncuestas.innerHTML = '<p class="text-center"> To see items please enter with account </p>'
    }
};