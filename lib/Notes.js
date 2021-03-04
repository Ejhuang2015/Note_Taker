// Dependencies
// =============================================================
// Allows the generation of unique ids
const { v4: uuidv4 } = require('uuid');
// Allows the ability to write and read files etc.
const fs = require('fs');
// Get access to the Database file
const dbData = require('../db/db');

class Notes {
    readNotes() {
        return json(dbData);
    }

    addNote(noteTitle, noteText) {
        newNote = {
            title: noteTitle,
            text: noteText,
            uuid: uudidv4(),
        }
        dbData.push(newNote);
    }
    
    deleteNote(id) {
        noteIndex = dbData.findIndex(uuid == id);
        dbData.splice(noteIndex,1);
    }
    
    editNote() {
        return this.email;
    }
}

module.exports = Notes;