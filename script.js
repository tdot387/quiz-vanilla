function toggleDialog(open) {
    document.getElementById("open-game-settings").open = open;
}

function next() {
    const categoriesContent = document.getElementById('players-content').classList.remove('d-none');
    const playersContent = document.getElementById('categories-content').classList.add('d-none');
}