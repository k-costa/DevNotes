//Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

//Funções
function addNote(){
    const noteObject = {
        id: generatedId(),
        content: noteInput.value,
        fixed: false
    };

    // console.log(noteObject)
    const noteElement = creatNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);

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
}

//Eventos
addNoteBtn.addEventListener('click', ()=> addNote());