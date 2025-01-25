import {Schema, model} from "mongoose"; //se crea un nuevo esquema y se le agrega un string debido a que esto es un comentario
 const Esquema = new Schema ({
    comentario: String
 })

 export const tabla = new model (
    "coments", Esquema //Aqui se crea la tabla que mandamos a llamar anteriormente
 )