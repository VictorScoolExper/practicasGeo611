const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) =>{
    if(user){
        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
            <p>Name: ${doc.data().nombre}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${doc.data().telefono}</p>
            <p>Direction: ${doc.data().direccion}</p>
            <p>Coordenadas: ${doc.data().coordenadas.lat} , ${doc.data().coordenadas.lng}</p>
            `;

            datosdelacuenta.innerHTML = html;
        })

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

};