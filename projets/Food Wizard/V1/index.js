let aliments = document.getElementById('aliments');
let categorie = document.getElementById('categorie');
let recette = document.getElementById('recette');
let Legume = document.getElementById('Legume');
let Fruit = document.getElementById('Fruit');
let rch = document.getElementById('rch');
let valueRch = rch.value;
let search = document.getElementById('search');
let refresh = document.getElementById('refresh');
let newAliment = document.getElementById('newAliment');
let ingPareil = [];

generate();

//------------generer les aliments--------------//

function generateAliment(){

    aliments.innerHTML = "";

    for (let i=0; i<produit.aliment.length; i++){

        let div = document.createElement('div');
        div.textContent = produit.aliment[i].nom;
        div.classList.add('nom', produit.aliment[i].categorie);
        aliments.appendChild(div);

        div.addEventListener('click', () => {
            
            div.classList.toggle(produit.aliment[i].couleur);

            for (let e=0; e<recepe.recepes.length; e++){

                for (let o=0; o<recepe.recepes[e].ingredient.length; o++){
                    if (produit.aliment[i].nom === recepe.recepes[e].ingredient[o]){
                        ingPareil.push(recepe.recepes[e].ingredient[o]);
                        generateRecette()
                    }
                }    
            }
            
        });
        
        search.addEventListener('click', () => {

            if (produit.aliment[i].nom != rch.value){

                div.classList.add('delete');

            } else {

                div.classList.remove('delete');
            }
        });

        refresh.addEventListener('click', () => {

            div.classList.remove('delete');
        })

        if (produit.aliment[i].nom == "+"){

            div.addEventListener('click', () => {
                newAliment.classList.toggle('delete');
            })
        }

        
    }
}

   
//---------------------stucture du JSON----------------------//

function createJsonElement (nom, categorie, couleur){
    let obj = {
        nom: nom,
        categorie: categorie,
        couleur: couleur
    };

    produit.aliment.push(obj);

}


//---------------------liste des aliments-----------------//

function generate() {

    

    let legume = ['Tomate','Courgette','Pomme de terre','Radis','Chou-fleur','Poireau','Petit pois','Panais','Laitue','Maïs','Courge','Mâche','Topinambour','Aubergine','Brocoli','Potiron','Salsifis','Poivron','Haricot vert','Endive','Echalote','Céleri','Ail','Artichaut','Asperge','Betterave','Blette','Carotte','Champignon','Navet','Citrouille','Oignon','Sauce tomate','Chou','Epinard','Fenouil'];

    for (let i=0; i<legume.length; i++) {

        createJsonElement(legume[i], "Legume", "vert");
        
    }
    
    

    let fruit = ['Cassis','Châtaigne','Clémentine','Pamplemousse','Coing','Figue','Groseille','Kiwi','Mandarine','Melon','Mirabelle','Mûre','Nectarine','Myrtille','Noisette','Noix','Prune','Rhubarbe','Pêche','Cerise','Abricot','Framboise','Poire','Raisin','Ananas','Banane','Mangue','Avocat','Datte','Passion','Grenade','Kaki','Noix de coco','Pastèque','Fraise','Pomme','Orange','Citron','Quetsche','Reine Claude','Carambole'];

    for (let i=0; i<fruit.length; i++) {

        createJsonElement(fruit[i], "Fruit", "rouge");
    }
    
    

    let poisson = ['Crevette','Saumon','Saumon fumé','Thon','Saint-Jacques','Cabillaud','Crabe','Anchois','Surimi','Sardine','Morue','Huître','Homard','Truite','Bar','calamar','Maquereau','Palourde','Seiche','Colin','Merlan','Lieu noir','Poulpe','Caviar','Turbot','Moule','Anguille','Mérou','Pieuvre','Gambas','Truite fumé','Ecrevisse','Raie','Langouste','Hareng','Tarama']

    for (let i=0; i<poisson.length; i++) {

        createJsonElement(poisson[i], "Poisson", "bleu");
    }



    let viande = ['Agneau','Boeuf','Canard','Boeuf haché','Saucisson','Chorizo','Foie Gras','Jambon','Jambon fumé','Lapin','Lard fumé','Lardons','Lard','Filet de boeuf','Poitrine','Poulet','Entrecôte','Veau','Coq','Filet mignon','Escalope','Magret','Faisan','Tournedos','Lièvre','Steak','Merguez','Sanglier','Andouille','Andouillette','Bavette','Boudin blanc','Rumsteck','Caille','Cervelas','Chipolata','Confit','Côte d\'agneau','Côte de boeuf','Crépinne','Dinde','Rosbeef','Rosette','Boudin noir','Salami','Saucisse','Coppa','Steak','Steak haché','Porc','Rôti','Travers'];

    for (let i=0; i<viande.length; i++) {

        createJsonElement(viande[i], "Viande", "orange");
    }



    let laitage = ['Oeufs','Beurre','Lait','Crème fraîche','Crème liquide','Crème','Yaourt','Crème fleurette','Lait concentré','Crème épaisse','Parmesan','Gruyère','Fromage frais','Crème anglaise','Fromage blanc','Mozzarella','Mascarpone','Cheddar','Margarine','Chèvre','Chèvre frais','Crème glacée','Ricotta','Emmental','Féta','Chantilly','Lait de chèvre','Lait en poudre','Lait de brebis','Comté','Roquefort','Boursin','Fromage bleu','Brie','Camembert','Petit-suisse','Raclette','Cantal','Flanby','Reblochon','From. à tartiner','Burrata','Babybel','Coulommier','Oeufs de caille','Beurre à l\'ail','Faisselle','Beu. d\'escargot'] 

    for (let i=0; i<laitage.length; i++) {

        createJsonElement(laitage[i], "Laitage", "blanc");
    }

    

    let sucrerie = ['Sucre en poudre','Chocolat noir','Chocolat','Cacao','Sucre','Chocolat blanc','Pépite choco','Nutella','Praliné','Choco en poudre','Caramel','Guimauve','Boudoirs','Caramel liquide','Bonbons','Sorbet','Tagada','Nougat','Beurre de cacao','Réglisse','Nougatine','Daims','Kinder bueno','Amandes','Sucre glace','Miel','Sucre vanillé','Sucre de canne','Sucre roux','Sirop d\'érable','Stevia','Glucose','Sirop','Pâte à sucre','Confiture','Fructose']

    for (let i=0; i<sucrerie.length; i++) {

        createJsonElement(sucrerie[i], "Sucrerie", "marron");
    }



    let matiereGrasse = ['Huile','Huile d\'olive','Huile végétale','Huile d\'arachide','H. de tournesol','Huile de sésame','Huile de canola','Huile de coco','Huile de raisin','Grai. de canard','Saindoux','Graisse d\'oie','Huile de maïs','Huile de palme','Huile de soja','Graisse de porc']

    for (let i=0; i<matiereGrasse.length; i++) {

        createJsonElement(matiereGrasse[i], "MatiereGrasse", "jaune");
    }

    let autre = ['Pâtes','Spaghetti','Farine']

    for (let i=0; i<autre.length; i++) {

        createJsonElement(autre[i], "Autre", "noir");
    }


    
    let btnNewAliment = document.getElementById('btnNewAliment');

    btnNewAliment.addEventListener('click', () => {
        let newNom = document.getElementById('newNom');
        let newCat = document.getElementById('newCat');
        let valueNewNom = newNom.value
        let valueNewCat = newCat.value
            
        console.log(valueNewNom);
        console.log(valueNewCat);
        createJsonElement(valueNewNom, valueNewCat, "noir");

        generateAliment();
    })


    generateAliment();
}

//-----------------scrollbar------------------//

const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {

  let progress = (document.documentElement.scrollTop / totalHeight) * 100;
  progressBar.style.height = `${progress}%`;
  progressBar.style.opacity = `${progress}%`;


})

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click', (e) => {

  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  })

})

// pour gérer le resize, vu que la hauteur du site change.
let debounceResize;
window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});


//-----------Generation recette-----------//

function generateRecette(){

    recette.innerHTML = "";

    for (let a=0; a<recepe.recepes.length; a++){
        
        let nb = 0;

        let cardRecepe = document.createElement('div');
        cardRecepe.classList.add('cardRecepe');
        recette.appendChild(cardRecepe);

        let imgRecette = document.createElement('img');
        imgRecette.src = recepe.recepes[a].img;
        imgRecette.classList.add('imgRecette');
        cardRecepe.appendChild(imgRecette);

        let nomRecette = document.createElement('p');
        nomRecette.innerHTML = recepe.recepes[a].nom;
        nomRecette.classList.add('nomRecette');
        cardRecepe.appendChild(nomRecette);

        let bodyRecette = document.createElement('div');
        bodyRecette.classList.add('bodyRecette');
        cardRecepe.appendChild(bodyRecette);

        let imgTpsRecette = document.createElement('img');
        imgTpsRecette.src = "img/reveil.png";
        imgTpsRecette.classList.add('imgTpsRecette');
        bodyRecette.appendChild(imgTpsRecette);

        let tpsPreparation = document.createElement('p');
        tpsPreparation.textContent = recepe.recepes[a].tpsPreparation;
        tpsPreparation.classList.add('tpsPreparation');
        bodyRecette.appendChild(tpsPreparation);

        

        let ingredient = document.createElement('p');
        ingredient.textContent = "Ingredients : ";
        ingredient.classList.add('ingredient');
        cardRecepe.appendChild(ingredient);

        for (let y=0; y<recepe.recepes[a].ingredient.length; y++){
            let listeIngredient = document.createElement('p');
            listeIngredient.textContent = '● ' + recepe.recepes[a].ingredient[y];
            listeIngredient.classList.add('listeIngredient');
            cardRecepe.appendChild(listeIngredient);

            console.log(recepe.recepes[a].ingredient[y]);


            for (let x=0; x<ingPareil.length; x++){
                
                if (recepe.recepes[a].ingredient[y] == ingPareil[x] && listeIngredient.style.color != "green"){
                    listeIngredient.style.color = "green";
                    nb++;
                    
                } else if(recepe.recepes[a].ingredient[y] != ingPareil[x] && listeIngredient.style.color == "green"){
                    listeIngredient.style.color = "green";
                    
                } else if(recepe.recepes[a].ingredient[y] == ingPareil[x] && listeIngredient.style.color == "green"){
                    listeIngredient.style.color = "whitesmoke";
                    nb--;

                } else if(recepe.recepes[a].ingredient[y] != ingPareil[x] && listeIngredient.style.color != "green"){
                    listeIngredient.style.color = "whitesmoke";

                }
            }
        }

        let nbIngredient = document.createElement('p');
        nbIngredient.textContent = "Vous avez " + nb + " ingrédient.s !";
        nbIngredient.classList.add('nbIngredient');
        cardRecepe.appendChild(nbIngredient);

        let lienRecette = document.createElement('a');
        lienRecette.textContent = "Recette complete";
        lienRecette.href = recepe.recepes[a].lien;
        lienRecette.classList.add('lienRecette');
        cardRecepe.appendChild(lienRecette);

        if (nb === 0){
            cardRecepe.classList.add('delete');
        } else {
            cardRecepe.classList.remove('delete');
        }  
        

    }

    
}


generateRecette()




