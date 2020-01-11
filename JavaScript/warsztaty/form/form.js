
// Zablokowanie, wysyłania Submit do URL przeglądarki

// document.getElementById("formularz").addEventListener("click", function (e) {
// e.preventDefault()

// })



// zablokowanie submita, w formularzu z wykorzystaniem add event listener- tworzy się tablica, musimy się odnieść do elementu,
// tablicy, z wykorzystaniem addeventlistener, i funkcji anonimowej function e, którą blokujemy, za pomocą prevent default, zapisując
// e.preventDefault()

let input=document.getElementsByTagName("input")[2].addEventListener("click", function (e) {
    e.preventDefault()

    // pobranie danych po name- pobiera nam tablice, do której musimy się odwołać odpowiedni, numerem, następnie poprzez value, 
    // pobieramy dane z formularza do konsoli
    let name1=document.getElementsByName("fname")[0].value
    
    let name2=document.getElementsByName("lname")[0].value
    
    console.log(name1 + " " + name2)
})





 