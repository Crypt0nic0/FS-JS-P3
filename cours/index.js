// Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
console.log(array);
console.log(array[2]);
console.log(array[1][5]);

let array2 = ["Bordeaux", 24, true, [1,2], {nom: "Denis"}];
console.log(array2);
console.log(array2[3][1]);
console.log(array2[4].nom);

let objet = {
    pseudo: "Denis",
    age: 33,
    technos: ["JavaScript", "React", "NodeJS"],
    admin: false,
};

console.log(objet);
console.log(objet.age);
console.log(objet.technos);
console.log(objet.technos[1]);
console.log(objet.technos[1][3]);

objet.adresse = "22 rue du code";

console.log(objet);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["JavaScript", "React", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["CSS", "React", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["PHP", "React", "NodeJS"],
        admin: true,
    }
];

console.log(data[2]);
console.log(data[2].pseudo);


//-------------------------------------------------------------------
// Les structures de controle
//-------------------------------------------------------------------

//---------------IF ELSE---------------

if(data[0].age > data[1].age){
    console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else{
    // valeur si faux
}

if(data[0].age > data[1].age) console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);


//---------------WHILE---------------

let w = 0;
while(w < 10){
    w++;
    console.log("La valeur de w est de : " + w);
}


//---------------DO WHILE---------------

let d = 0;
do{
    d++;
    console.log(d);
} while (d < 5);


//---------------BOUCLES FOR---------------

for(const user of data){
    document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

for(i = 0; i < data.length; i++){
    document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

//---------------SWITCH---------------

document.body.addEventListener("click", (e) => {
    switch(e.target.id){
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "violet";
            break;
        case "python":
            document.body.style.background = "blue";
            break;
        default:
            null;
    }
});