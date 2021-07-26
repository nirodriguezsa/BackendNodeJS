const fs = require('fs');


//Crea los archivos
fs.writeFile('./text.txt','Texto de prueba', function (err) {
    if(err){
        console.log(err);
    }
    console.log('Archivo Creado');
})

// Lee los archivos 
//console.log('Fin del código');

// fs.readFile('./text.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// })