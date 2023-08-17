const fs = require("fs/promises");
fs.writeFile("./archivoPrueba.txt","linea1\nlinea2",error=>{
    if(error){
    console.log(error)
    }else{
        console.log("archivo creado")
    }

})

fs.readFile("./archivoPrueba.txt").then(datos =>{
    console.log(datos.toString())
}).catch(error =>{
    console.log(error)
})

fs.readdir("C:/Users/Sommer/Desktop/ABDALA").then(archivos =>{
    for (let archivo of archivos) {
        console.log(archivo);
    }
}).catch(error =>{
    console.log(error)
})
