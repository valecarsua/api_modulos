const {response} = require ('express')

const Traslado = require ('../models/traslado')

const trasladoGet = async(req, res= response) =>{
    const {nombre_estudiante} = req.query

    const traslados = await Traslado.find()

    res.json({
        traslados
    })
}

const trasladoPost = async(req, res= response) =>{
    const body = req.body
    let mensaje = ''

    console.log (body)
    try{
        const traslado = new Traslado(body)
        await traslado.save()
        mensaje = 'Se inserto correctamente el estudiante en el curso'
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

const trasladoDelete = async (req, res = response) =>{
    const {_id} = req.body
    let mensaje = ''

    try{
        const traslado = await Traslado.deleteOne ({_id: _id})
        mensaje = 'Se elimino correctamente'
    }catch(error){
        mensaje= 'error al eliminar'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    trasladoGet,
    trasladoPost,
    trasladoDelete
}