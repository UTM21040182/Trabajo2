import mongoose from "mongoose"; //importamos libreria Mongoose
import cors from "cors"; //Importamos libreria Cros
import dotenv from "dotenv"; //Importamos libreria dotenv
import express from "express"; //Importamos libreria express
import { test } from "./back/controlador/coments.controlador.js"; //Importamos el test desde la carpeta controlador y de ahi vamos al archivo js que es el controlador
dotenv.config(); // se trae el .env para que haya una comunicacion

mongoose.connect(process.env.urlbd) 
.then(() => {
    console.log("chido") //imprime de confirmacion
})
.catch((error) => {
    console.log("No jala mae") //imprime que no jala
})

const app = express();
app.use(cors());
app.listen(4001, () => {
    console.log("Se escucha chido")}); //confirma que ya jalo bien xd

test()//se manda a llamar con el test