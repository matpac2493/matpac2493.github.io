// console.log(window)
// console.log(document)
// console.log(document.documentElement)
// console.log(document.document)

// // pobranie z documentu, wszystkie paragrafy
// let allP = document.getElementsByTagName('p')


// console.log( document.getElementById( "parFirst" ).children ); //wyloguje kolekcje znaczników
// console.log( document.getElementById( "parFirst" ).childNodes ); //wyloguje kolekcję wszystkich węzłów
// console.log( document.getElementById( "parFirst" ).childNodes[1] ); //wyloguje znacznik a
// console.log( document.getElementById( "parFirst" ).firstElementChild ); //wyloguje znacznik p
// console.log( document.getElementById( "parFirst" ).lastElementChild ); //wyloguje znacznik a

// let btn = document.createElement( "button" );
// let textBtn = document.createTextNode( "Click me" );
// let classBtn = document.createAttribute( "class" );

// document.body.appendChild(p);


// wstawienie buttona pomiedzy paragrafami  1 metoda dodawania atrybutów

// let btn=document.createElement ("button")
// let text= document.createTextNode("Jestem")
// btn.appendChild(text)
// let classAtr=document.createAttribute("class")
// classAtr.value = "mainBtn"


//  Druga metoda dodawania atrybutów, stworzenie buttona, 

// 1 stworzenie buttona
// btn.setAttribute("class", "mainBtn")

// 2 podpięcie buttona do strony
// get element to pobranie diva, po jego id maindiv append child to dodanie buttona, na koniec diva 
// document.getElementById("maindiv").appendChild(btn)



// Dynamiczna podmiana tekstu ( nadanie paragrafowi id ), innerHtml- najcześciej słuzy do dynamicznej podmiany tekstu przez zapisanie zamiast paragraf 3, to jużnie 
//inner tekst, doda zwykły znacznik HTML  



let test=document.getElementById("3par").innerHTML="już nie"
console.log("TCL: test", test)


// odwołanie po klasie: trzeba dodac klasę, linku a href, mainA,  i wtedy odwołujemy sie do tablicy, musimy wybrać 0 element czyli perwszy element w tablicy, aby się podmienił

let changeHref = document.getElementsByClassName("mainA")
console.log("TCL: changeHref", changeHref)

for ( let i=0; i < changeHref.length; i++) {
if(changeHref[i].innerHTML== "drugi link") 
{ changeHref[i].href = "https://www.onet.pl/"
    
}
} 



// Podpinanie Eventu pierwszy sposób

function pierwszyEvent () {
    
}
console.log(pierwszyEvent)


// drugi event double click




