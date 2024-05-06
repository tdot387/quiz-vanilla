let categories;
let questions;

function toggleDialog(open) {
    document.getElementById("open-game-settings").open = open;
}

function toQuestions() {
    const categoriesContent = document.getElementById('questions-content').classList.remove('d-none');
    const playersContent = document.getElementById('categories-content').classList.add('d-none');
    categories = document.getElementById('categories').value;
}

function toPlayers() {
    const playersContent = document.getElementById('categories-content').classList.add('d-none');
    questions = document.getElementById('questions-per-category').value;
}

function buildGame() {
    const cats = document.getElementById('cats');
    cats.innerHTML = '';
    // Erstellt die Top-Bar mit den Kategorien
    for(let i = 0; i < categories; i++) {
        cats.innerHTML += `
        <div class="col-${12 / categories} center-shit border-boxes py-3" id="cat-${i}">Cat ${i + 1}</div>
        `
    }
    // Erstellt AKTUELL EINE Reihe von Fragen unter Kat. 1
    for(let i=0; i < questions; i++) {
        let qDiv = document.createElement('div');
        qDiv.innerHTML = 'Hallo' + (i+1);
        qDiv.id = (i+1)
        cats.appendChild(qDiv)

    }
}