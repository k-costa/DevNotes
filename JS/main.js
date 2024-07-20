//Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

//Funções
function showNotes(){
    getNotes().forEach((note) => {
        const noteElement = creatNote(note.id, note.content, note.fixed);  
        
        notesContainer.appendChild(noteElement);
    });    
}

function addNote(){
    const notes = getNotes();

    const noteObject = {
        id: generatedId(),
        content: noteInput.value,
        fixed: false
    };

    const noteElement = creatNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);

    noteInput.value = ""; //função de limpar o campo
}

function generatedId(){
    return Math.floor(Math.random()*5000)
}

function creatNote(id, content, fixed){
    const element = document.createElement("div");

    element.classList.add("note");

    const textarea = document.createElement("textarea");

    textarea.value = content;

    textarea.placeholder = "Adicione algum texto";

    element.appendChild(textarea);

    return element
}

function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");     

    return notes;
}

function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes))
}

//Eventos
addNoteBtn.addEventListener('click', ()=> addNote());

//Inicialização
showNotes()