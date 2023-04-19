import { Viaje } from '../models/Viaje.js'
import { Testimonios } from '../models/Testimonios.js'

const paginaInicio = async (req, res) => { // req: lo que enviamos, res: lo que express responde

    // Consultar 3 viajes del modelo Viaje

    const promiseDB = []

    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimonios.findAll({ limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio', {
                pagina: 'Inicio',
                clase: 'home',
                viajes: resultado[0],
                testimonios: resultado[1]
            })
    } catch (error) {
        console.log(error)
    }

    // Consultar 3 testimonios
    

    
}

const paginaNosotros = (req, res) => { // req: lo que enviamos, res: lo que express responde
    res.render('nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => { // req: lo que enviamos, res: lo que express responde
    // Consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Proximos Viajes',
        viajes, // normalmente seria viajes: viajes, pero como se llaman igual se omite
    })
}

// Muestra pagina por su slug
const paginaDetalleViaje = async (req,res) => {

    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug: slug }});

        res.render('viaje', {
            pagina: "Informacion Viaje",
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaTestimonios = async (req, res) => { // req: lo que enviamos, res: lo que express responde

    try {
        const testimonios = await Testimonios.findAll();
        res.render('testimonios',{
            pagina: 'Testimonios',
            testimonios
        })
    } catch (error) {
        console.log(error)
    }

}

const paginaContactanos = (req, res) => { // req: lo que enviamos, res: lo que express responde
    res.render('contacto', {
        pagina: 'Contacto'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimonios,
    paginaContactanos
}