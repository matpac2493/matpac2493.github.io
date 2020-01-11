// 1. Sprawdzenie czy jest podpięty skrypt.js
// console.log("działa")

// 2. pobranie buttona JavaScript, model DOM, pobranie elementu po ID getElementById 
let button = document.getElementById("button")

// 3. Podpięcie zdadzenia pod button, metodą addEventListener, i nadanie mu właściwości, klik, oraz nadanie funkcji, ze po kliknięciu, ma pobrać dane, metoda AJAX FETCH

// button.addEventListener("click", function () {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => response.json())
//         .then(json => console.log(json));

// })

// 4. Napisanie funkcji getData, która pobiera dane z serwera, aby wyświetlić w konsoli website trzeba response.website
function getData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {
            // console.log(response.website);

         // 5. tworzenie paragrafu metoda create element DOM 
         let pID = document.createElement('p');
            // pID.innerHTML = `User ID: ${response.id}`;
            let pIDtxt = document.createTextNode(`User ID: ${response.id}`);
            // 6 Wstawienie paragrafu metodą appendchild wezeł jako ostanie dziecko danego węzła, oraz odwołanie do odpowiedzi response.id, analogicznie robimy do name, i website 
            pID.appendChild(pIDtxt);

            let pName = document.createElement('p');
            let pNameTxt = document.createTextNode(`User name: ${response.name}`);
            pName.appendChild(pNameTxt);

            let pWebsite = document.createElement('p');
            let pWebsiteTxt = document.createTextNode(`User url: ${response.website}`);
            pWebsite.appendChild(pWebsiteTxt);

            let divData = document.getElementById('data');

            divData.appendChild(pID);
            divData.appendChild(pName);
            divData.appendChild(pWebsite);

            console.log(pName);


        });

}
// 5. podpięcie funkcji get data pod buttona, pobierz dane. Po kliknięciu, ma pobrać dane z serwera, i wyświetlić z konsoli
button.addEventListener("click", getData);

// 6. Pobranie danych, i wyświetlenie ich na stronie
















