import express from 'express';
import cors from "cors";
import Usuario from './routes/Usuario.js'
import ANP from './routes/ANP.js'
const app = express();


app.use(cors());
app.use(express.json());



//app.use(registrosAtencionRoutes)
app.use(Usuario)
app.use(ANP)
app.use('/Images',express.static('./Images'))


export default app;