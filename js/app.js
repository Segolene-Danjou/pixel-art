
var nbBox = 1;

var header = document.createElement('header');
document.body.appendChild(header);

//Ajout des élements au formulaire
var formNode = document.querySelector('.configuration');
header.appendChild(formNode);
//Ajout div taille de la grille
var gridHeightDiv = document.createElement("div");
gridHeightDiv.id = "grid-height";
formNode.appendChild(gridHeightDiv);
//Legende de la taille de la grille
var gridHeightValue = document.createElement("label");
gridHeightValue.innerHTML = "Hauteur de la grille";
gridHeightDiv.appendChild(gridHeightValue);



// Ajout d'un champ pour choisir la taille de la grille
var gridHeightNumber = document.createElement('input');
gridHeightNumber.type = "number";
gridHeightNumber.id = "nbgrid";
gridHeightNumber.value = "1";
gridHeightNumber.min = "1";
gridHeightNumber.max = "30";
gridHeightDiv.appendChild(gridHeightNumber);
gridHeightDiv.style.height = '2Opx';
gridHeightDiv.style.display = 'flex';
gridHeightDiv.style.flexDirection = "column";
gridHeightDiv.style.maxWidth = '200px';


gridHeightNumber.addEventListener('change', createGrid);
//Ajout div taille des cases
var cellHeightDiv = document.createElement("div");
cellHeightDiv.id = "cell-height";
formNode.appendChild(cellHeightDiv);

//Legende de la taille des cases
var textNbCases = document.createElement("label");
textNbCases.innerHTML = "Taille des cases";
cellHeightDiv.appendChild(textNbCases);



// Ajout d'un champ pour choisir la taille des cases
var numberInput = document.createElement('input');
numberInput.type = "number";
numberInput.id = "cellheight";
numberInput.value = "20";
numberInput.min = "10";
numberInput.max = "30";
cellHeightDiv.appendChild(numberInput);
cellHeightDiv.style.height = '2Opx';

numberInput.addEventListener('change', changeSize);

function changeSize() {
    main.innerHTML = ""; 
    grid(main);
}


var main = document.createElement('main');
document.body.appendChild(main);


function createGrid() {
   main.innerHTML = ""; 
    grid(main);
}


//Création de la grille
function grid(element) {
    var container = document.createElement("div");
   
    container.id = "main";
    container.className = "container";
 
    for (i=0; i<gridHeightNumber.value; i+=1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = i + "row" ;
       
      
        for (k=0; k<gridHeightNumber.value; k+=1) {
            var box = document.createElement("div"); 
            box.className = "box";
            box.id = i + "row" + k +"box";
            row.appendChild(box);
            box.style.height = numberInput.value + 'px';
            box.style.width = numberInput.value + 'px';
            box.addEventListener('click', changeColor);
            
             function changeColor(event) {
                event.target.classList.toggle('boxClickBlack')
            };
        };
        container.appendChild(row);      
    };
    element.appendChild(container);
};
grid(main);

