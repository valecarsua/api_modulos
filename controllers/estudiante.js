const {response} = require ('express')

const Estudiante = require ('../models/estudiante')

const estudianteGet = async(req,res =response) =>{
    const {nombre} = req.query

    const estudiantes = await Estudiante.find()

    res.json({
        estudiantes
    })
}

const estudiantePost = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    console.log(body)
    try{
        const estudiante = new Estudiante(body)
        await estudiante.save()
        mensaje = 'La inserción es correcta.'
    }catch(error){
        if (error){
            if (error.name === 'ValidationError'){
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values (error.errors).map(val =>val.message)
            }
        }
        console.log(mensaje)
    }
    res.json({
        msg: mensaje
    })
}

const estudiantePut = async(req,res = response) =>{

    const{nombre, apellido, correo, documento, tipo_documento, nro_telefono, estado} = req.body
    let mensaje = ''

    try{
        const estudiante = await Estudiante.findOneAndUpdate({documento: documento}, {nombre:nombre, correo:correo,apellido:apellido, tipo_documento: tipo_documento, nro_telefono:nro_telefono, estado:estado})
        mensaje = 'Modificado exitosamente'
    }
    catch(e){
        mensaje='Error al modificar'
    }

    res.json({
        msg: mensaje
    })
}

const estudianteDelete = async (req, res = response) =>{
    const {_id} = req.body
    let mensaje = ''

    try{
        const estudiante = await Estudiante.deleteOne({_id: _id})
        mensaje = 'La eliminación fue exitosa'
    }
    catch(error){
        mensaje= 'Error para eliminar'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    estudianteGet,
    estudiantePost,
    estudiantePut,
    estudianteDelete
}
