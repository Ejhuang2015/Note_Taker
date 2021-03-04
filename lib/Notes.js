// Dependencies
// =============================================================
// Allows the generation of unique ids
const { v4: uuidv4 } = require('uuid');
// Allows the ability to write and read files etc.
const fs = require('fs');
// Get access to the Database file
const dbData = require('../db/db');

// Class Functions
// =============================================================
class Notes {
    // Return the json file
    readNotes() {
        return dbData;
    }
    // Append a new object based on user's input and add an ID to the object
    addNote(noteTitle, noteText) {
        const newID = uuidv4();
        newNote = {
            title: noteTitle,
            text: noteText,
            uuid: newID,
        }
        dbData.push(newNote);
        console.log(`Note #${newID} added!`);
    }
    // Remove the object from the array based on matching ids
    deleteNote(id) {
        let noteIndex = dbData.findIndex(uuid == id);
        dbData.splice(noteIndex,1);
        console.log(`Note #${id} deleted!`);
    }
}

// Export file
// =============================================================
module.exports = Notes;