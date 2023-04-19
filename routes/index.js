import express from 'express'
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimonios, 
    paginaContactanos, 
    paginaDetalleViaje
} from '../controllers/paginasController.js'
import { guardarTestimonios } from '../controllers/testimoniosController.js'
const router = express.Router()

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros )

router.get('/viajes', paginaViajes )

router.get('/viajes/:slug', paginaDetalleViaje )

router.get('/testimonios', paginaTestimonios )
router.post('/testimonios', guardarTestimonios )

router.get('/contacto', paginaContactanos )

export default router;