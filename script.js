// Model
const app = document.getElementById('app');
let tall1;
let tall2;
const pocketStuff = ['hat','pencil','Dinosaur','showercap','piece of tape'];
const handleVogn = [];
let input;
// View
updateView();
function updateView(){
    html = /*html*/ `
    <div>Numbers
    <div id="display"></div>
    <button onclick="multiplyBy2()">MultiplyBy2</button>
    <div id="text"></div>
    <button onclick="getFirstWord()">GetFirstWord</button>
    <div id="trials"></div>
    <div id="random"></div>
    <button onclick="randomPair()">RandomPair</button>
    <div id="pocket"></div>
    <button onclick="seeWhatsInPocket()">Sjekk lomme</button>
    <div id="handleTur"> <h1>Skriv inn ønsket vare eller trykk på navngitte kanpper</h1>
    <input type="text" id="butikkHylle" value="">
    <button onclick="addToCart2(this)">Add to cart</button>
    <button onclick="addToCart2(this)">Milk</button>
    <button onclick="addToCart2(this)">Bread</button>
    <button onclick="addToCart2(this)">Cheese</button>
    <button onclick="addToCart2(this)">Chicken</button>
    <button onclick="addToCart2(this)">soap</button>
    <button onclick="addToCart2(this)">coffee</button>
    <div id="HandleVogn">${handleVogn}</div>
    </div>
    </div>
    
    `;
    app.innerHTML = html;
}

// Controler
function multiplyBy2() {
    let number = 2;
    while(number <= 100) {
        number = number*2;
        document.getElementById('display').innerHTML+= number + ' ';
    }
}


function getFirstWord(){
    let text='Bjarne liker alfabetet';
    let separator='';
    let firstWord='';
    let index =0;
    while(separator != ' '){
        if(text.charAt(index) ===' '){
            separator =' ';
        }
        firstWord += text.charAt(index);
        index++;
        document.getElementById('text').innerHTML += firstWord + ' ';
    }
    
}


function randomPair(){
    let first;
    let second;
    index=0;
    numGen();
    while(tall1!=tall2){
        numGen();
        first= tall1;
        second= tall2;
        index++;
        console.log(first,second);
        document.getElementById('random').innerHTML += `Random Number Pairs:<li> ${first}, ${second}</li>`;
        if(tall1===tall2){
            document.getElementById('trials').innerHTML = `Antall iterasjoner før 2 like tall: ${index}, paret er: ${first} og ${second}`;

            console.log(index);
        } 
    }
    
    //updateView();
}

function numGen() {
    let random1 = Math.random();
    let random2 = Math.random(); //genererer Random tall
    tall1 = Math.floor(random1*10);
    tall2 = Math.floor(random2*10); //sørger for at tallene er mellom 1-10
    return tall1, tall2;
    //updateView();
}

function seeWhatsInPocket(){
    for(let i=0; i<pocketStuff.length; i++){
        console.log(`På runde ${i} i loopen ser jeg ${pocketStuff[i]}`);
        document.getElementById('pocket').innerHTML += `På runde ${i} i loopen ser jeg ${pocketStuff[i]}.<br> `;
    }
}

function Handlevogn(){
    for(let i=0; i<handleListe.length; i++){

    }
}

function addToCart() {
    input = document.querySelector("#butikkHylle").value;
    handleVogn.push(input);
    let newItem = document.querySelector("#HandleVogn");
    //newItem.innerHTML += input;
    newItem.innerHTML = handleVogn;
    console.log(input,handleVogn);

}
function addToCart2(item) {
    input = item.innerHTML;
    handleVogn.push(input);
    let newItem = document.querySelector("#HandleVogn");
    //newItem.innerHTML += input;
    newItem.innerHTML = handleVogn;
    console.log(input,handleVogn);

}