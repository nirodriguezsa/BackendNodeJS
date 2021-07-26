const express = require('express');
const morgan = require('morgan'); //logger

const app = express();

//Settings

app.set('appName','Api con Express')
app.set('port', 3000);
app.set('view engine', 'ejs') //Motor de plantillas

//Middlewares

app.use(express.json());
app.use(morgan('dev'));

// function logger(req,res,next){
//     console.log(`Route received ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }


// app.use(logger);



//Routes
app.all('/user*', (req,res, next) => {
    console.log("Por aqui pasó");
    next();
})

app.get('/user',(req, res)=>{
    res.json({
        name: 'Nicolas',
        tel: '3006873000'
    });
})

app.post('/user/:id', (req,res) =>{
    console.log(req.body);
    console.log(req.params);

    res.send('Petición POST recibida')
})

app.put('/contact', (req,res) =>{
    res.send('Petición PUT recibida')
})

app.delete('/delete', (req,res) =>{
    res.send('Petición DELETE recibida')
})

app.use(express.static('public')); // Trae la pagina web desde la carpeta public

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log("Corriendo en puerto " + app.get('port'));
})