let categories;

function toggleDialog(open) {
    document.getElementById("open-game-settings").open = open;
}

function toPlayers() {
    const categoriesContent = document.getElementById('players-content').classList.remove('d-none');
    const playersContent = document.getElementById('categories-content').classList.add('d-none');
    categories = document.getElementById('categories').value;

}

function buildGame() {
    const cats = document.getElementById('cats');
    cats.innerHTML = '';
    for(let i = 0; i < categories; i++) {
        cats.innerHTML += `
        <div class="col-${12 / categories} center-shit border-boxes py-3">Cat ${i + 1}</div>
        `
    }
}