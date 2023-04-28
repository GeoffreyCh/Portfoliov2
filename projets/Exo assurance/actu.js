let cf = document.getElementById('cf');

let covid = document.getElementById('covid');
let maladie = document.getElementById('maladie');
let famille = document.getElementById('famille');
let medicament = document.getElementById('medicament');

function generate(){
    cf.innerHTML = "";

    let newRow = document.createElement('div');
    newRow.classList = 'row';
    cf.appendChild(newRow);

    for (let i=0; i<actu.card.length; i++){
        let newCol = document.createElement('div');
        newCol.classList = 'col-xs-12 col-sm-9 col-md-6 col-lg-4';
        newRow.appendChild(newCol);
        
        let carte = document.createElement('div');
        carte.classList = "card text-white bg-primary";
        newCol.appendChild(carte);

        let imgCard = document.createElement('img');
        imgCard.classList = 'card-img-top';
        imgCard.src = actu.card[i].img;
        imgCard.style.height = "280px"; 
        carte.appendChild(imgCard);

        let bodyCard = document.createElement('div');
        bodyCard.classList = 'card-body bg';
        carte.appendChild(bodyCard);

        let titleCard = document.createElement('h4');
        titleCard.classList = 'card-title';
        titleCard.textContent = actu.card[i].titre;
        bodyCard.appendChild(titleCard);

        let textCard = document.createElement('p');
        textCard.classList = 'card-text';
        textCard.textContent = actu.card[i].description;
        bodyCard.appendChild(textCard);

        let btnCard = document.createElement('a');
        btnCard.classList = 'btn btn-light btnArticle';
        btnCard.href = "#";
        btnCard.textContent = "Voir plus";
        bodyCard.appendChild(btnCard);

        covid.addEventListener('click', () => {
            newCol.classList.remove("delete");
            if (actu.card[i].categorie != "cov"){               
                newCol.classList.add("delete");
        }
        });

        maladie.addEventListener('click', () => {
            newCol.classList.remove("delete");
            if (actu.card[i].categorie != "mal"){  
                newCol.classList.add("delete");
            }
        });

        famille.addEventListener('click', () => {
            newCol.classList.remove("delete");
            if (actu.card[i].categorie != "fam"){
                newCol.classList.add("delete");
        }
        });

        medicament.addEventListener('click', () => {
            newCol.classList.remove("delete");
            if (actu.card[i].categorie != "med"){   
                newCol.classList.add("delete");
        }
        });
    }
}

generate()