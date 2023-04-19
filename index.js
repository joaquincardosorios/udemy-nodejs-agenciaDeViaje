import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'

const app = express();

//Conectar BD
db.authenticate()
    .then( () => console.log('Bade de Datos conectada') )
    .catch( error => console.log(error))

//  Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug')

// Obtener año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.nombreSitio = "Agencia de Viajes";
    res.locals.currentYear = year.getFullYear();
    next();
})

// Agregar body parser para ller datos de usuarios
app.use(express.urlencoded({ extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

