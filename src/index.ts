import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import rotas from "./Rotas";

const inicio = express()
createConnection()

inicio.use(cors())
inicio.use(bodyParser.json())
inicio.use(rotas)

inicio.listen(8000)