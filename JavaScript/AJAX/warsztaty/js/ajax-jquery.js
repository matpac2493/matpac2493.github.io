// console.log("działa")

$(function () {
    // kod do wykonania
    // pobranie buttona Jquery
    // zmienna button, która pobiera button do consoli
    let button = $("#button")
    console.log(button);
    // robimy zmienna div, która pobiera div, i zwraca do konsoli
    let div = $("#data")
    console.log(div);
    // podpiecie buttona, pod zdarzenie klik, które ma pobierać dane, 
    $("#button").click(function () {
      $.getJSON("https://jsonplaceholder.typicode.com/users/1", function(getData) {

        console.log(getData) 
        // dodanie wyświetlanie danych w divie, po kliknięciu pobiera się 
        $("#data").append(getData.id);
        $("#data").append(getData.name);
        $("#data").append(getData.website);

      
    
    
    
    });
       









    });




























});