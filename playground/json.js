// var obj = {
// 	name: 'Jeremiah'
// }
// // what if we want to do something with it? save to server/DB etc?
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)


/* why set equal to string as single quotes? 
because JSON uses double quotes in it so wrap with single quotes
around the JSON
*/
/*
var personString = '{"name": "Jeremiah", "age": 32}'
// need to get from server then convert back to object
// deserialize
var person = JSON.parse(personString) // converts JSON string to original form
// in this case original form is an object
// prove it!
console.log(typeof person)
console.log(person)
*/

// next step?
/* store string in file > read contents of file back
*/

const fs = require('fs')

// when someone wants to SAVE a note
	// define obj to store in file and read back and parsed
var originalNote = {
	title: 'Some title',
	body: 'Some body'
}
	// originalNoteString and set to JSON value of object above
var originalNoteString = JSON.stringify(originalNote)
	// write file into ./playground folder
fs.writeFileSync('notes.json', originalNoteString)



// when someone wants to read a note
	// read out contents > parse > print one of properties to screen (console)
var noteString = fs.readFileSync('notes.json')
	// note
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)