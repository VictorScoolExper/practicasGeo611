const formguisado = document.getElementById('formGuisado');
const buttonGuisado1 = document.getElementById('buttonGuisado1');
const buttonGuisado2 = document.getElementById('buttonGuisado2');

const btnGuisado1 = document.querySelector('.btnGuisado1');
const btnGuisado2 = document.querySelector('.btnGuisado2');

let guisado1;
let guisado2;

formguisado.addEventListener('submit', (e)=>{
    e.preventDefault();

    guisado1 = formguisado['guisado1'].value;
    guisado2 = formguisado['guisado2'].value;

    btnGuisado1.innerHTML = guisado1;
    btnGuisado2.innerHTML = guisado2;

    btnGuisadosRating.forEach(item => item.style.display = 'block');
    btnGuisadoFinal.forEach(item => item.style.display = 'block');
    listaloggedinIngresaGuisados.forEach(item => item.style.display = 'none');

    alert("Seguro? cerrar si seguro.");
});

let rateCountFrown1 = 0;
let rateCountStraight1 = 0;
let rateCountSmile1 = 0;
const btnfrown1 = document.getElementById('btnfrown1');
const btnstraight1 = document.getElementById('btnStraight1');
const btnSmile1 = document.getElementById('btnSmile1');

btnfrown1.addEventListener('click',(e)=>{
    e.preventDefault();

    rateCountFrown1 = rateCountFrown1 + 1;

    //console.log(rateCountFrown1);
    $('#ratingModalGuisado1').modal('hide');
});

btnstraight1.addEventListener('click',(e)=>{
    e.preventDefault();

    rateCountStraight1 = rateCountStraight1 + 1;

    //console.log(rateCountStraight1);

    $('#ratingModalGuisado1').modal('hide');
});

btnSmile1.addEventListener('click', (e)=>{
    e.preventDefault();

    rateCountSmile1 = rateCountSmile1 + 1;

    //console.log(rateCountSmile1);
    $('#ratingModalGuisado1').modal('hide');
})


let rateCountFrown2 = 0;
let rateCountStraight2 = 0;
let rateCountSmile2 = 0;
const btnfrown2 = document.getElementById('btnfrown2');
const btnstraight2 = document.getElementById('btnStraight2');
const btnSmile2 = document.getElementById('btnSmile2');

btnfrown2.addEventListener('click',(e)=>{
    e.preventDefault();

    rateCountFrown2 = rateCountFrown2 + 1;

    $('#ratingModalGuisado2').modal('hide');
});

btnstraight2.addEventListener('click',(e)=>{
    e.preventDefault();

    rateCountStraight2 = rateCountStraight2 + 1;

    console.log(rateCountStraight2);
    $('#ratingModalGuisado2').modal('hide');
});

btnSmile2.addEventListener('click', (e)=>{
    e.preventDefault();

    rateCountSmile2 = rateCountSmile2 + 1;

    console.log(rateCountSmile2);
    $('#ratingModalGuisado2').modal('hide');
});

const btnPreSend = document.getElementById('btnPreSend');

btnPreSend.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Add a new document with a generated id.
    db.collection("guisados").add({
        guisadoUno: guisado1,
        gui1rating1: rateCountFrown1,
        gui1rating2: rateCountStraight1,
        gui1rating3: rateCountSmile1,
        guisadoDos: guisado2,
        gui2rating1: rateCountFrown2,
        gui2rating2: rateCountStraight2,
        gui2rating3: rateCountSmile2,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    alert("Se agrego la encuesta del dia de hoy a la base de datos!");

})




