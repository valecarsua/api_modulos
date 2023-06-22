const {Schema, model} = require ('mongoose')

const TrasladoSchema = Schema ({
    nombre_estudiante:{
        type: String,
        required: [true, 'El campo nombre es requerido.']
    },
    documento:{
        type: Number,
        required: [true, 'El documento del estudiante es requerido']
    },
    curso_actual:{
        type: String,
        required: [true, 'Digita el curso actual para modificar el estudiante.']
    },
    curso_nuevo:{
        type: String,
        required: [true, 'Digita el curso que que quieres acceder']
    },
    detalle:{
        type: String,
        required: [true, '¿Cuál es el motivo por el cual el estudiante va a cambiar de curso?']
    },
    estado:{
        type: Boolean,
        required: [true, 'El estado del estudiante es requerido'],
        default: true
    }
})

module.exports = model ('Traslado', TrasladoSchema)