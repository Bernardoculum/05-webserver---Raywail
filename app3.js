const http = require('http')

http.createServer((req, res) =>{
  
    console.log(req);
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(200,{'Content-Type':'aplication/csv'})

    res.write('id, nombre\n')
    res.write('1, Bernardo\n')
    res.write('2, Vicente\n')
    res.write('3, Culum\n')
    res.write('4, Ratzam\n')
    res.end();
})
.listen(8080)
    
console.log('Escuchando el puerto',8080);
