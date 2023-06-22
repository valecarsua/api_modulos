const express = require ('express')
const{dbConnection}= require('../database/config')
const cors = require ('cors');
const bodyParser = require ('body-parser')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT 
        this.estudiantePath = '/academia/estudiante'
        this.trasladoPath = '/academia/traslado'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));

        this.app.use( cors() );

        this.app.use(bodyParser.json())
    }

    routes(){
        this.app.use(this.estudiantePath, require('../routes/estudiantes'))
        this.app.use(this.trasladoPath, require('../routes/traslados'))
    }

    async conectarDB(){
        await dbConnection()
    }
}

module.exports = Server