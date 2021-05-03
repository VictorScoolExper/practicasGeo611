class Registro {
        
    constructor(id,nombre,codigo){
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
    };

    borrar(id){                
        db.collection("Message").doc(id).delete();
    };

    agregar(){
        db.collection('Message').add({

            nombre: this.nombre,
            codigo: this.codigo
            
        });
    }

    editar(id){    
        formularioeditar.nombreeditar.value = this.nombre;
        formularioeditar.codigoeditar.value = this.codigo;
        formularioeditar.ideditar.value = this.id;
    };

    actualizar(){    
        db.collection('Message').doc(this.id).update({
            nombre: this.nombre,
            codigo: this.codigo
        });
    };

};