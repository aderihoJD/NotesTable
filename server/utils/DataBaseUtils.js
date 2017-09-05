import mongoose from "mongoose";

import "../models/Note";

import {db} from "../../config/default";

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
    console.log(`Connected to MongoDB on port: ${db.port}`);
}

export function listNotes() {
    return Note.find();
}

export function certainNote(id){
    return Note.findById(id);
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function replaceNote(data) {
    return Note.findByIdAndUpdate(data._id, data, {new: true});
}

export function deleteNote(id){
    return Note.findById(id).remove();
}