const {Router} = require('express')

const route = Router()

const { trasladoGet, trasladoPost, trasladoDelete } = require ('../controllers/traslado')

route.get('/', trasladoGet)

route.post('/', trasladoPost)

route.delete('/', trasladoDelete)

module.exports = route