const {Router} = require('express')

const route = Router()

const { estudianteGet, estudiantePost, estudiantePut, estudianteDelete } = require ('../controllers/estudiante')

route.get('/', estudianteGet)

route.post('/', estudiantePost)

route.put('/', estudiantePut)

route.delete('/', estudianteDelete)

module.exports = route