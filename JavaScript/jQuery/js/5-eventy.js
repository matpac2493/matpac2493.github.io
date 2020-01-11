$( function() {
    // kod do wykonania
    "use strict";
    // funkcja klik, która ma za zadanie coś zrobić po wywołaniu tej funkcji, funkcja ta ma wyświetlić alert po kliknieciu nie wiem
function klik () {
    alert("nie wiem");
}

// pobranie buttona model DOM, tak aby można było się do niego podpiąć
    let btnClick = document.getElementById("click");
    console.log(btnClick);

    // wywołanie funkcji metodą addEventListener metoda click, i funkcja klik która się robi
    btnClick.addEventListener("click",klik);
    
    // pojedycze zdarzenie na paragrafie
    $("#click").click( function () {
        $(this).css("color", "orange")});

// nadanie elementowi h1 funkcji zmieniającej kolory
        $('h1').on(
            {
                'mouseenter': function () {
                    $(this).css("color", "pink");
                },
    
                'mouseleave': function () {
                    $(this).css("color", "green");
                },
    
                'click': function () {
                    $(this).css("color", "red");
                },
            }
        );


     

            
            
    








        




    } );