//Creando el servidor.. 
import express from 'express';
import router from './routes/index.js';

const app = express(); 

//definir puerto 
const port = process.env.PORT || 4000; 

//habilitar pug
app.set('view engine', 'pug');

//creando nuestro propio middleware para obtener el año actual
//req significa los que le estamos enviando al servidor, res lo que el servidor nos manda a nosotros y next ya termina y pasa al siguiente middleware
app.use((req,res,next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return next()
})

//definir la carpeta publica
app.use(express.static('public'));

//agregar router 
app.use('/', router)

app.listen(port, () => {
    console.log(`el servidor esta funcionando en el  puerto ${port}`)
   })

