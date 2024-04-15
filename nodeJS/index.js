#!/usr/bin/env node
// This line specifies the programming environment the code below should be run when executing via CLI


const note = process.argv[2];
const newNote = {
    content: note,
    id: Date.now(),
};

console.log(newNote);