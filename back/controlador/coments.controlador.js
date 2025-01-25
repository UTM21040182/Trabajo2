import {tabla} from "../modelo/coments.modelo.js"; //se manda a llamar la tabla creada en el modelo.js

tabla.create({
    comentario: "Me gusto la pelicula, salu2" //cometario
})

export const test = () =>{
    console.log("Echandole una llamda al controlador") //confirma que se puede llamar al pana
}