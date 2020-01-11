$( function() {
    // kod do wykonania
    "use strict";

    // wybieranie elementu z kolekcji za pomocą find

    console.log($("body").find("p"));


    // wybieranie elementu z kolekcji za pomocą 

    $("body").find("p").eq(2).css({"color": "green"})

    // pętla each dodająca do paragrafów klasę z kolejnym numerem
// wywołanie funkcji z elementem, funkcja z parametrem index, która nadaje klasy paragrafom i daje to paragraf-0 paragraf - 1
    $("p").each(function(index){
       $(this).addClass("paragraf-" + index);


    } )





    




    } );