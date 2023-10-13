// se requiere el paquete http

const http = require ('http')


//creando el Webserver
//toma dos argumentos: req (la solicitud del cliente) y res (la respuesta que se enviará al cliente).

http.createServer((req, res) =>{
    res.write('Hola Mundo')
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);