let cities = ['Warsaw', 'Berlin', 'Paris'];

console.log(cities.length);

let olMiasta = document.createElement('ol');
olMiasta.setAttribute('id', 'lista-miast');

document.body.appendChild(olMiasta);

for (let i=0; i < cities.length; ++i) {
    let liMiasto = document.createElement('li');
    liMiasto.setAttribute('class', 'city');

    liMiasto.innerText = cities[i];

    // olMiasta.appendChild(liMiasto);
    olMiasta.insertAdjacentHTML('beforeend',liMiasto)
    // console.log(cities[i]);
    console.log(olMiasta.outerHTML);
}