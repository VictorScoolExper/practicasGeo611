auth.onAuthStateChanged( user =>{
 
    if(user){
        console.log('Usuario entró');

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition( position =>{
                

                db.collection('usuarios').doc(user.uid).update({
                    coordenadas : {
                        latitude : position.coords.latitude,
                        longitude : position.coords.longitude
                    }
                });

            });
        }

        db.collection('usuarios').onSnapshot(snapshot =>{
            obtieneAmigos(snapshot.docs);
            configuraMenu(user);
        }, err => {
            console.log(err.message);
        });

    }
    else{
        console.log('Usuario salió');
        obtieneAmigos([]);
        configuraMenu();
    }

});


const salir = document.getElementById('salir');

salir.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        alert("El usuario ha salido del sistema");
    });

});


function mensajeError(codigo) {

    let mensaje = '';

    switch(codigo) {
        case 'auth/wrong-password':
          mensaje = 'Su contraseña no es correcta';
          break;
        case 'auth/user-not-found':
            mensaje = 'El usuario no existe o el correo no esta registrado';
            break;
        case 'auth/weak-password':
            mensaje = 'Contraseña débil debe tener al menos 6 caracteres';
            break;
        default:
            mensaje = 'Ocurrió un error al ingresar con este usuario';
      }
    return mensaje;
  }

const formaingresar =  document.getElementById('formLogin');

formaingresar.addEventListener('submit',(e)=>{
    e.preventDefault();
    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo,contrasena).then( cred =>{

        $('#ingresarmodal').modal('hide');
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML = '';
    }).catch( err => {
        formaingresar.querySelector('.error').innerHTML = mensajeError(err.code);
        console.log(err);
    });
    
});