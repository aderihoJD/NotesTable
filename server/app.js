import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {serverPort} from "../config/default";
import * as db from "./utils/DataBaseUtils";


db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.get('/notes/:id', (req, res) => {
    db.certainNote(req.params.id).then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data))
});

app.put('/notes', (req, res) => {
    db.replaceNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and runnig on port: ${serverPort}`)
});