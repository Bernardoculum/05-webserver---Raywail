
const express = require ('express')
const app = express()

const port = 8080


//va saber  que el index html
app.use(express.static('public'))


//! vamos a validar las rutas
app.get ('/hola-mundo' ,(req,res)=>{
    res.send('Hola mundo en su respectiva ruta')
})

//! voy a validar cualquier otra ruta me de dar error

// app.get sirve para validar las rutas
// sendFile sirve para mandar el html error


app.get ('*' ,(req,res)=>{
    // aqui aramos el path
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
