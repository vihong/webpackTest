//---------------- @JohnCodeur : GET / SET en ES6 ----------------//

/*

// Comment protéger l'accès et la modification des propriétés de nos instances ? Avec GET et SET.

class Person {
    constructor(name1){
        this._name = name1;
    }
    get name(){
        return ("Vi Reangsy");
    }
    set name(nickname){
        if (nickname.length < (this.name).length){
            this._name = nickname;
        }
        else {
            console.log(`Ton nickname "${nickname}" est trop long pour moi. Continue à m'appeler Vi Reangsy.`)
        }

    }
}

let vi = new Person("Bangpea");


console.log(`Mon prénom officiel est ${vi.name}`);
console.log(`Mais mon prénom semi-caché est ${vi._name}.`);
vi.name = "Jean-Christophe";
vi.name = "Vi"
console.log(`OK, appelle moi "${vi._name}", c'est plus court.`)
*/


//---------------- @JohnCodeur : METHODE STATIC en ES6 ----------------//

/*
// Parfois, il est pratique de "ranger" toutes les fonctions qui traitent d'un même sujet dans une
// seule même class pour ensuite pourvoir les utiliser. Ennui : pour utiliser la méthode d'une class,
// il faut d'abord créer une instance de celle-ci. Sauf que le procédé peut s'avérer lourd.
// La solution consiste à ajouter le mot clef STATIC devant chacune des méthodes créée dans la class.

class Mathematique {
    static addition(nombre1, nombre2) {
        return nombre1 + nombre2;
    }

    static multiplication(nombre1, nombre2) {
        return nombre1 * nombre2;
    }
}

const myMaths = new Mathematique;

// console.log(myMaths.addition(5, 7)); // "Error" car addition n'est plus une méthode qui appartient à myMaths.
console.log(Mathematique.addition(5, 7)); // 12

*/
//---------------- @JohnCodeur : HERITAGE (ou "INHERITANCE") en ES6 ----------------//

/*

// Quand on cherche à ajouter une propriété ou une méthode en plus à une class déjà existante,
// es6 nous permet d'aller plus vite en ajoutant le mot clé "extends".
// Le mot-clé "super" fait toujours référence à la classe de base.

class Person {
    constructor (name1, age1){
        this.name = name1;
        this.age = age1;
    }

    present(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

class Hero extends Person {
    constructor (name, age, power1){
        super (name, age);
        this.power = power1;
    }

    usePower(){
        console.log(`I use my power: ${this.power}.`);
    }
    presentPower(){
        super.present();
        console.log(`My superpower is: ${this.power}.`);
    }
}

const aquaman = new Hero ("Aquaman", 34, "swim");

aquaman.presentPower()
*/
//---------------- @JohnCodeur : CLASS en ES6 ----------------//

/*
// Simplification syntaxique de création de class en JS.

class Person {
    constructor (name1, age1){
        this.name = name1;
        this.age = age1;
    }

    present(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age}.`);
    }
}


const vi = new Person("Vi", "29");

vi.present(); //Hello my name is Vi and I'm 29.
*/

//---------------- @JohnCodeur : DESTRUCTURING OBJECTS ----------------//
/*
//Déstructurer signifier séparer les légos d'un grand édifice en légos.
// La seule différence avec le destructuring de arrays c'est l'absence d'ordre avec le destructuring d'objets.
// A cause de cela, la variable que je vais déclarer va devoir porter le même nom que la propriété de l'objet.
// Si on tient absolument à avoir un autre nom pour les variables nouvellement créées, on passe par les alias.

const myObject = {
    name : "John",
    age: 32,
    present : function(){
        console.log(`Hello I'm ${this.name}`)
    },
    presentFlechées : () => {
        console.log(`Hello I'm ${this.name}`)
    }
}

console.log(myObject);

const {name: name1, age: age1} = myObject;
const {present: hello} = myObject;

console.log(name1);
console.log(age1);
myObject.present();
hello();
myObject.presentFlechées();
*/

//---------------- @JohnCodeur : DESTRUCTURING ARRAYS ----------------//

/*
// Cela s'apparente au SPREAD sauf qu'ici, on ne "casse" pas le array d'origine. On ne fait que
// créer des variables indépendantes (et pas juste des valeurs indépendantes).

const fruits = ["fraise", "banane", "poire", "kiwi"];

const [a, b] = fruits;

console.log(a);
console.log(b);

*/

//---------------- @JohnCodeur : FOR OF ----------------//

/*
// Souvent quand tu parcours une chaine de caratères (pour l'afficher par exemple), tu utilises
// une boucle for assez lourde qu'on utilise pourtant souvent. C'est là qu'intervient le FOR OF.
// Compare les deux formules ci-dessous pour comprendre comment le for of allège la syntaxe :


const fruits = ["fraise", "banane", "poire", "kiwi"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("--------------")

for (let i of fruits)
    console.log(i)
*/

//---------------- @JohnCodeur : PARAMETRES SPREAD ----------------//



/*
const fruitsRouges = ["fraise", "framboise"];
const fruitsRouges2 = [...fruitsRouges];

fruitsRouges2.push("cerise");

console.log(fruitsRouges)
console.log(fruitsRouges2)
*/
/*
la grande subtilité ici, c'est de bien comprendre que lorsque tu utilises l'opérateur SPREAD
ce dernier éclate la chaine donnée en paramètre pour EN CREER UNE NOUVELLE AUTRE CHAINE complètement
indépendante de l'ancienne. C'est ça qui explique pourquoi le pfait d'avoir push sur fruitsRouges2
n'a pas eu de conséquence sur fruitsRouges.
*/

//---------------- @JohnCodeur : PARAMETRES REST ----------------//


/*
// Remarque : la grande différence entre le REST et le SPREAD c'est ce qu'on inscrit en paramètre juste après les "...":
// Si on envoie plusieurs valeurs indépendantes en paramètre, alors c'est REST qui va être utilisé.
// Si on envoie un array en paramètre, alors c'est SPREAD qui va être utilisé.



//1°) Ci-dessous, on SPREAD un seul array en plusieurs variables indépendantes.
const mesNombres = [5, 8, 21, 46, 17]

const faisMoiLaSomme = (nb1, nb2, nb3) => {
    console.log(`${nb1}, ${nb2} et ${nb3} ne sont maintenant plus dans un array`)
    return nb1 + nb2 + nb3; //ici tu vois bien que on a fait la somme de trois nombres distincts mais en séparé (puisqu'il y a des "+". C'est devenu impossible de passer par une boucle "for").
}

console.log(faisMoiLaSomme(...mesNombres));


//2°) Ci-dessous, on SPREAD deux arrays distincts en plusieurs variables indépendantes pour ensuite toutes les réunir dans un array "panier".
const fruitsRouges = ["fraise", "framboise"];
const fruitsVerts = ["pomme", "poire"];

const panier = [...fruitsRouges, ...fruitsVerts];

console.log(panier);
*/

//---------------- @JohnCodeur : PARAMETRES REST ----------------//

/*
// L'opérateur REST prend plusieurs valeurs libres et indépendantes pour en former un array à insérer
// en paramètre de fonction. Attention, les "..." doivent  être précisés en paramètre lors de
// la DECLARATION de fonction et non de l'exécution de fonction


let a = 3;
let b = 5;
let c = 8;

const faisMoiLaSomme = (...tabNombres) => {
    console.log(tabNombres); //ici on voit que les trois variables a, b et c ont été réuni dans un array nouvellement créé.
    let sum = 0;
    for (i = 0; i < tabNombres.length; i++)
        sum += tabNombres[i];
    return sum;s
}

console.log(faisMoiLaSomme(a, b, c));
*/

//---------------- @JohnCodeur : PARAMETRES PAR DEFAUT DANS UNE FONCTION ----------------//


/*let myVar = "Codeur"

const nomComplet = (prenom, nom = myVar) => console.log(`${prenom} ${nom}`)

nomComplet("John");
*/

//---------------- @JohnCodeur : FONCTIONS FLECHEES 2sur2 ----------------//

/*
// Avec les fonctions classiques, la valeur du "this" dépend du CONTEXTE D'EXECUTION. Executé dans un objet, elle prend pour valeur de l'objet "me".
// Avec les fonctions fléchées, la valeur du "this" dépend du CONTEXTE DE DECLARATION. Même exécuté dans un objet, elle prendra ci-dessous la valeur de l'objet window.



const classicFunction = function(){
    console.log(this);
}

// const arrowFunction = () =>
//     console.log(this);


const classicFunctionBind = classicFunction.bind(this);


const me = {
    name: "Vi",
    presentClassic : classicFunction,
    presentArrow : arrowFunction = () =>
    console.log(this),
    presentClassicBind : classicFunctionBind,
}

me.presentClassic();
me.presentArrow();
me.presentClassicBind(); //equivalent to the previous line with presentArrow
*/

//---------------- @JohnCodeur : FONCTIONS FLECHEES 1sur2 ----------------//

// Syntaxe simplifiée des fonctions fléchées.


/*const myFunction = arg => arg * 5;

console.log(myFunction(5));


// const me = {
//     name : "John",
//     presentFriend: function (friend){
//         return ("Tu connais " + friend + " ?");
//     }
// }


const me = {
    name : "John",
    presentFriend: friend => {
        const presentation = `Tu connais ${friend} ?`;
        console.log(presentation);
    }
}

const dresseurPokemon = {
    name: "Sacha",
    equipe: (p1, p2, p3) => {
        console.log(
`Je m'appelle ${dresseurPokemon.name} Mes trois pokémons de bases sont ${p1}, ${p2} et ${p3}
Tu veux les combats ?`)
    }
}

me.presentFriend("Ondine");
dresseurPokemon.equipe("Papillusion", "Tentacruel", "Insécateur");*/


/*
//---------------- fonctions @grafikart ----------------

var eleve1 = {
    nom: "Jean",
    note: [15, 16, 18, 3]
}
var eleve2 = {
    nom: "Marc",
    note: [5, 18, 20, 20]
}

var moyenneDe = function (eleve) {
    var sum = 0;
    var moy;
    for (i = 0; i < eleve.length; i++) {
        sum = sum + eleve[i];
    }
    moy = sum / eleve.length;
    var moy2 = Math.round(moy * 100) / 100;
    return (moy2);

}

var estMeilleur = function (pers1, pers2){
    console.log("La moyenne de " + pers1.nom + " est de : " + moyenneDe(pers1.note));
    console.log("La moyenne de " + pers2.nom + " est de : " + moyenneDe(pers2.note));
    return (moyenneDe(pers1.note) > moyenneDe(pers2.note));
}

console.log(estMeilleur(eleve1, eleve2));
*/

/*
//---------------- FONCTIONS CONSTRUCTEUR (2) ----------------


function Dog(nameDog, colorDog, ageDog)
{
    this.name = nameDog;
    this.color = colorDog;
    this.age = ageDog;
    this.aboie = function(number){
        console.log(this.name + ": WOUAF!!! (" + number.toString() + " fois)");
    }
}

var choupette = new Dog("Choupette", "White", 4);
var arras = new Dog("Arras", "Noir/feu", 2);
var mystic = new Dog("Mystic", "Marron", 5);

const meute = [choupette, arras, mystic];


function eleve(nomEleve, moyenneEleve){
    this.nom = nomEleve;
    this.moyenne = moyenneEleve;
}

const Pierre = new eleve ("Pierre", 16);
const Hugo = new eleve ("Hugo", 19);
const Kanso = new eleve ("Kanso", 18);

const bof = [Pierre, Hugo, Kanso];

var groupe1 = [
    {
        nom : "Vi",
        moyenne : 18,
    },
    {
        nom : "Adeline",
        moyenne : 15,
    },
    {
        nom : "Sophie",
        moyenne : 8,
    },
];

var groupe2 = [
    {
        nom : "Rémi",
        moyenne : 9,
    },
    {
        nom : "Olivier",
        moyenne : 12,
    },
    {
        nom : "Antoine",
        moyenne : 13,
    },
];


var resultat = function (classroom){
    for (i = 0 ; i < classroom.length; i++){
        if (classroom[i].moyenne >= 10)
        console.log(classroom[i].nom + ": diplomé(e) avec " + classroom[i].moyenne + " de moyenne");
        else
        console.log(classroom[i].nom + " recalé(e) avec " + classroom[i].moyenne + " de moyenne");
    }
}
 resultat(groupe1);
 resultat(groupe2);
 resultat(groupe2);
 resultat(bof);

*/

/*

//---------------- FUNCTION CONSTRUTEUR ----------------

function Dog(nameDog, color, age) {
    this.name = nameDog;
    this.color = color;
    this.age = age;
    this.aboie = function(number){
        for (; number > 0 ; number-- ){
        console.log(this.name + ": 'Wouaf wouaf' (" + number.toString() + "e fois)")}
    }
}

var esmeralda = new Dog("Esmeralda", "red", 14, 8);
var arras = new Dog("Arras", "noir/feu", 4, 2);

console.log(esmeralda);
console.log(arras);

arras.aboie(2);
esmeralda.aboie(4);


*/



/*
//---------------- OBJETS ----------------

var dog = {
    name : "Choupette",
    color : "white",
    age : 4,
    aboie : function(number){
        for (; number > 0 ; number-- ){
        console.log(number.toString() + " Wouaf wouaf")}
    }
};

console.log(dog);


// dog.aboie(10);
// for (let property in dog)
// {
//     console.log(dog[property]);

// }

*/


/* LET & CONST

const x = {name : "John"};

console.log(x.name);

x.name = "Codeur";

console.log(x.name);

console.log(z);

const z = 8;
*/


/* TYPE PRIMITIF VS. TYPE OBJETS : https://www.youtube.com/watch?v=9OBKC5EQlZU&list=PL5BcU-_5Oa_r0h75i4nRve7YE5dn1BOw4&index=5
var x = {name : "John"};

console.log(x);

var y = {name : "Pokemon"};

console.log(x);
console.log(y);
*/







/* ARRAYS
var pokemon_team = ["cysayox", "lamantine", "staross", "papillusion", "tentacruel", "dracoloss"];

pokemon_team.pop();

for (i = 0; i < pokemon_team.length; i++)
{
    console.log("pokemon n° " + (i + 1) + ": " + pokemon_team[i]);
}


pokemon_team.push("minidraco");

console.log("----------------");


for (i = 0; i < pokemon_team.length; i++)
{
    console.log("pokemon n° " + (i + 1) + ": " + pokemon_team[i]);
}

*/