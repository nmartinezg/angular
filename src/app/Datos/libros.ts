import { Libro } from '../modelos/libro';
export const _Libros: Libro[] = [
    {
        id: 1,
        sinopsis: ' Lorem, ! rum! ',
        descripcion: 'Descripcion del libro',
        autor_id: 1,
        categoria_id: 1,
        titulo: 'El alquimista',
        numero_paginas: 25,
        gratuito: false,
        tipo: 'P',
        fecha_publicacion: new Date('2018-04-06T12:12:12')
    },
    {
        id: 2,
        sinopsis: ' Lorem, ipsum dollitia eaquerem, ipsum dolorem, ipsum dolorem, ipsum dolo, m porro, reiciendis ab rerum! ',
        descripcion: 'Descripcion del libro',
        autor_id: 1,
        categoria_id: 1,
        titulo: 'El Laberinto del Fauno',
        numero_paginas: 345,
        gratuito: true,
        tipo: 'C',
        fecha_publicacion: new Date('2018-04-06T12:12:12')
    },
    {
        id: 3,
        sinopsis: ' Lorem, ipsum dolor sirem, ipsum dolorem, ipsum dolorem, ipsum doloendis ab rerum! ',
        descripcion: 'Descripcion del libro',
        autor_id: 1,
        categoria_id: 1,
        titulo: 'Don QUijote de La mancha',
        numero_paginas: 543,
        gratuito: false,
        tipo: 'M',
        fecha_publicacion: new Date('2015-04-06T12:12:12')
    },

    {
        id: 4,
        sinopsis: ' Lorem, ipsum dolorrem, ipsum dolorem, ipsum dolorem, ipsum dolorem, ipsum dolo siendis abrem, ipsum dolo rerum! ',
        descripcion: 'Descripcion del libro',
        autor_id: 1,
        categoria_id: 1,
        titulo: 'Don QUijote de La mancha',
        numero_paginas: 543,
        gratuito: false,
        tipo: 'M',
        fecha_publicacion: new Date('2000-06-06T10:11:12')
    }
]
