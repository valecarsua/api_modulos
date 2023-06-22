const {Schema, model} = require ('mongoose')

const EstudianteSchema = Schema ({
    nombre:{
        type: String,
        required:[true,'El campo nombre es requerido.']
    },
    apellido:{
        type: String,
        required:[true, 'El campo apellido es requerido.']
    },
    correo:{
        type: String,
        required: [true, 'El campo del correo es requerido.']
    },
    documento:{
        type: Number,
        required: [true, 'Ingrese su documento'],
        maxlength: [10, 'Como maximo debe tener 10 caracteres']
    },
    tipo_documento:{
        type: String,
        required: [true, 'El campo es requerido'],
        enum: ['Cedula', 'Tarjeta Identidad']
    },
    nro_telefono:{
        type: Number,
        required: [true, 'El numero telefonico es requerido']
    },
    estado:{
        type: Boolean,
        required: [true, 'El estado es obligatorio'],
        default: true 
    }
})

module.exports = model ('Estudiante', EstudianteSchema)