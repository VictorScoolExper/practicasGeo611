const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');

const listaloggedInMap = document.querySelectorAll('.logged-in-map');

auth.onAuthStateChanged(user =>{
    console.log(user);
    if(user){
        listaloggedin.forEach(item => item.style.display = 'block');
        listaloggedout.forEach(item => item.style.display = 'none');
        listaloggedInMap.forEach( item => item.style.display = 'none');
    }else{
        listaloggedin.forEach(item => item.style.display = 'none');
        listaloggedout.forEach(item => item.style.display = 'block');
        listaloggedInMap.forEach( item => item.style.display = 'none');
    }
});


const formaingresar = document.getElementById('formLogin');

formaingresar.addEventListener('submit', (e)=>{
    e.preventDefault();

    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(cred =>{
        console.log(cred);

        $('#ingresarModal').modal('hide');
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML="";
    }).catch(err => {
        formaingresar.querySelector('.error').innerHTML=mensajeError(err.code);
        console.log(err);
    });
});

