import App from "./App.js";
// import NotesAPI from "./NotesAPI.js";
// import NotesView from "./NotesView.js";

// const app = document.getElementById("app");
const root = document.getElementById("app");
const app = new App(root);

// const view = new NotesView(app, {
//   onNoteAdd() {
//     console.log("Add a note");
//   },

//   onNoteSelect(id) {
//     console.log("Note selected:" + id);
//   },

//   onNoteDelete(id) {
//     console.log("Note DELETED:" + id);
//   },

//   onNoteEdit(newTitle, newBody) {
//     console.log(newTitle);
//     console.log(newBody);
//   },
// });

// const notes = NotesAPI.getAllNotes();

// view.updateNoteList(notes);
// view.updateActiveNote(notes[0]);
