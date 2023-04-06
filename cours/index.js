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


//---------------METHODES STRING---------------
let string2 = "Javascript est un langage orienté objet";
console.log(typeof string2);
console.log(eval(1 + 2));
console.log(eval(parseInt("1") + 2));
console.log(isNaN("48"));
console.log(string2.length);
console.log(string2[string2.length - 1]);

console.log(string2.indexOf("langage"));
console.log(string2.indexOf("x")); // Retourne -1 s'il ne connait pas

let newString = string2.slice(2);
console.log(string2);
console.log(newString);
let newString2 = string2.slice(5,17);
console.log(newString2);

console.log(string2.split(" "));

console.log(string2.toLowerCase());
console.log(string2.toUpperCase());

console.log(string2.replace("Javascript", "PHP"));



//---------------METHODES NUMBERS---------------
let number2 = 42.1234;
let numberString = "42.12 est un string";

console.log(number2.toFixed(2));
console.log(parseInt("43"));
console.log(parseInt(numberString));
console.log(parseFloat(numberString));

console.log(Math.PI);
console.log(Math.round(4.5)); // Arrondi
console.log(Math.floor(4.9)); // Arrondi en dessous
console.log(Math.ceil(4.1)); // Arrondi au dessus
console.log(Math.pow(2,7)); // Puissance
console.log(Math.sqrt(16)); // Racine carré

console.log(Math.floor(Math.random() * 50));



//---------------METHODES TABLEAUX---------------
let array3 = ["JavaScript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

console.log(array3 + array4);
console.log(array3.concat(array4));

console.log([array3, array4]);
console.log([...array3, ...array4]);

console.log(array3.join(" - "));

console.log(array3.slice(1));
console.log(array3.slice(2,3));

console.log(array3.indexOf("Python"));

array3.forEach((languages) => console.log(languages));

console.log(array3.every((language) => language === "Php")); // Est-ce que dans chaque élement du tableau il y a "Php"
console.log(array3.some((language) => language === "Php")); // Est-ce que dans un des élément il y a "Php"

// Enlever le premier élément
let shift = array3.shift();
console.log(shift);
console.log(array3);

// Enlever le dernier élément
console.log(array3.pop());


const restArray = array3.splice(1, 1, "C++");
console.log(restArray);
console.log(array3);



// !!!! IMPORTANT !!!! //
let arrayNumber = [4, 74, 28 ,12, 1];
console.log(arrayNumber.reduce((x,y) => x + y));

arrayNumber.push(17);
console.log(arrayNumber);

// FILTER / SORT / MAP
console.log(arrayNumber.filter((number) => number > 10));

console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a,b) => b - a));
console.log(arrayNumber.sort((a,b) => a - b));

document.body.innerHTML += arrayNumber.map((number) => `<li> ${number} </li>`).join("");



//---------------METHODES OBJETS---------------
document.body.innerHTML += data
    .filter((user) => user.admin === false)
    .sort((a,b) => b.age - a.age)
    .map((user) => 
    `
        <div class="user-card">
            <h2>${user.pseudo}</h2>
            <p>Age : ${user.age} ans</p>
            <p>Statut : ${user.admin ? "Modérateur" : "Membre"}</p>
        </div>
    `)
    .join("");







//====================================================//
//====================LES DATES=======================//

// Date classique
let date = new Date();

// Timestamp
let timestamp = Date.parse(date);
console.log(timestamp);

// IsoString
console.log(date.toISOString());

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    return newDate;
};

console.log(dateParser(date));
console.log(dateParser(timestamp));


