const {Router} = require('express')

const route = Router()

const { trasladoGet, trasladoPost, trasladoPut, trasladoDelete } = require ('../controllers/traslado')

route.get('/', trasladoGet)

route.post('/', trasladoPost)

route.put ('/', trasladoPut)

route.delete('/', trasladoDelete)

module.exports = route