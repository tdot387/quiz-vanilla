let categories;
let questions;

let questionArray = [];

const categoriesNumber = document.getElementById('categories-number');
const categoriesNames = document.getElementById('categories-names');


function toggleDialog(open) {
    document.getElementById("open-game-settings").open = open;
}

function submitNumberOfCategories() {
    categoriesNumber.classList.add('d-none');
    categories = document.getElementById('categories').value;
    for (let i = 0; i < categories; i++) {
        
        categoriesNames.innerHTML += `
        <input placeholder="Name of Category ${i}" id="categories-${i}"><br />
        `;
        
    }
    categoriesNames.innerHTML += `<button onclick="submitNamesOfCategories()">Next</button>`;
    categoriesNames.classList.remove('d-none');
}


function submitNamesOfCategories() {
    questionArray = [];
    for(let i = 0; i < categories; i++) {
        const selector = `#categories-${i}`;
            const inputs = document.querySelectorAll(selector);
            inputs.forEach(input => {
                questionArray.push(input.value);
            })
    }
    toggleDialog();
}



// function buildGame() {
//     const cats = document.getElementById('cats');
//     cats.innerHTML = '';
//     // Erstellt die Top-Bar mit den Kategorien
//     for(let i = 0; i < categories; i++) {
//         cats.innerHTML += `
//         <div class="col-${12 / categories} center-shit border-boxes py-3" id="cat-${i}">Cat ${i + 1}</div>
//         `
//     }
//     // Erstellt AKTUELL EINE Reihe von Fragen unter Kat. 1
//     for(let i=0; i < questions; i++) {
//         let qDiv = document.createElement('div');
//         qDiv.innerHTML = 'Hallo' + (i+1);
//         qDiv.id = (i+1)
//         cats.appendChild(qDiv)

//     }
// }

// async function getJSON() {
//     const response = await fetch('questions.json');
//     const data = await response.json();

//     const cat1 = document.getElementById('cat1');
//     const cat2 = document.getElementById('cat2');
//     const cat3 = document.getElementById('cat3');

//     cat1.innerText = data[categories].category;
//     cat2.innerText = data[categories].category;
//     cat3.innerText = data[categories].category;
// }