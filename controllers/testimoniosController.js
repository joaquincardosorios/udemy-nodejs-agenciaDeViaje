import { Testimonios } from '../models/Testimonios.js'
const guardarTestimonios = async (req,res) => {

    // Validar
    const {nombre, correo, mensaje } = req.body

    const errores = [];
    if(nombre.trim()==='') errores.push({mensaje: 'El nombre esta vacio'})
    if(correo.trim()==='') errores.push({mensaje: 'El correo esta vacio'})
    if(mensaje.trim()==='') errores.push({mensaje: 'El mensaje esta vacio'})


    if (errores.length>0){

        // Consultar testimonios existentes
        const testimonios = await Testimonios.findAll();

        // Mostrar la vista con errores
        res.render('testimonios',{
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        })
    } else{
        // Almacenar testimonio en BD
        try {
            await Testimonios.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimonios')
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonios
}