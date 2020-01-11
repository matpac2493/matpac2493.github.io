$( function() {
    // kod do wykonania
    "use strict";

    // efekt hide i show 

  $("p").hide(3000).show(300);

//   efekt fadeOut i Fade in 

$("h2").fadeOut(3000).fadeIn(3000);

// efekt slideUp i slideDown

$("h3").slideUp(3000).slideDown(3000);


// funkcja animacji, tak aby zrobiła pierwsza się wykonała, a następnie zeby wykonała się funkcja animacja,  w funkcji animacji jQuery zapisujemy callback- czyli wpisujemy funkcje animacja 
function animacja() {
    console.log("zakończono pierwszą animację. Zaraz startuje druga")
    $( "h3").animate( { "font-size": "3em", "margin-left" : "100px" }, 2000);
}



// funkcja animacji napisana w JQuery 

$( "h3").animate( { "font-size": "3em", "margin-left" : "100px" }, 2000, animacja);



    




    } );