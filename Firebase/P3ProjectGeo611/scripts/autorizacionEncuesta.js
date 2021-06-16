const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedinGuisados= document.querySelectorAll('.logged-in-guisados');
const listaloggedinIngresaGuisados= document.querySelectorAll('.logged-in-ingresa-guisado');
const btnGuisadosRating= document.querySelectorAll('.btnGuisadosRating');
const btnGuisadoFinal= document.querySelectorAll('.btnGuisadoFinal');




auth.onAuthStateChanged(user =>{
    console.log(user);
    if(user){
        listaloggedinGuisados.forEach(item => item.style.display = 'block');
        listaloggedout.forEach(item => item.style.display = 'none');
        listaloggedinIngresaGuisados.forEach(item => item.style.display = 'block');
        btnGuisadosRating.forEach(item => item.style.display = 'none');
        btnGuisadoFinal.forEach(item => item.style.display = 'none');
        
    }else{
        listaloggedinGuisados.forEach(item => item.style.display = 'none');
        listaloggedout.forEach(item => item.style.display = 'block');
        listaloggedinIngresaGuisados.forEach(item => item.style.display = 'none');
        btnGuisadosRating.forEach(item => item.style.display = 'none');
        btnGuisadoFinal.forEach(item => item.style.display = 'none');
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

