
// JavaScript ES5 szablon obiektu- klasa, określona kolejność, określony typ danych, 

// function Pracownik(name, sname, email,phone) {
//     this.nameSurName=name + " " + sname;
//     this.email = email
//     this.phone = phone
// }

// // tablica

// let wszyscyPracownicy = []
// console.log(wszyscyPracownicy)

// let janKowalski = new Pracownik ("Jan", "Kowalski", "jk@op.pl","775775775")
// wszyscyPracownicy.push(janKowalski)
// console.log(janKowalski)
// console.log(wszyscyPracownicy)

// let adamNowak = new Pracownik("Adam", "Nowak", "an@op.pl", "696874456" )

// wszyscyPracownicy.push(adamNowak)
// console.log("TCL: wszyscyPracownicy", wszyscyPracownicy)
// console.log(wszyscyPracownicy)

// function vali(name, sname, email,phone) {
// if(name== typeof String && sname== typeof String)
// let adamNowak = new Pracownik("Adam", "Nowak", "an@op.pl", "696874456" )

// }


// ES6 JavaScript Klasa

class NowyPracownik {
constructor(name, sname, email,phone, children,ageChildren) {
    this.nameSurName=name + " " + sname;
    this.email = email
    this.phone = phone
    this.children = {
        age: ageChildren,
        nameChildren:children
    }
} 
}


let adamJakis = new NowyPracownik("Adam", "Jakis", "aj@wp.pl", "654123145", "Brajan", "3 lata")
console.log(adamJakis)