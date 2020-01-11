$( function() {
    // kod do wykonania
    // pobieranie tekstu z paragrafu
    let tekstPierwszegoParagrafu=  $( "#paragraf").text();
    console.log(tekstPierwszegoParagrafu);

    // dodanie tekstu do paragrafu dajemy kropkę aby odwołać się do paragraf aby zmienic jego tekst
    $(".paragraf").text("test")
   
    // dodawanie HTML
$(".paragrafnext").html("To nie jest <strong>paragraf</strong> z dodanym <br>HTMLM </br>")

// treść na końcu selektora
$(".paragrafnext").append("Treść na końcu selektora")

// usuwanie całości
$("strong").remove()

// usuwanie tylko jego zawartości
$(".paragraf").empty()

// dodawanie css i nadanie mu właściwości css
$(".paragrafnext").css( {
    color:"red", 
    "font-size":"3em",})
// nadanie backgroundColor tła zielonego 
    $(".paragrafnext").css("backgroundColor", "green");

    // dodawanie klas
    $("h1").addClass("blue")

    // dodawanie atrybutu
    $("h1").attr("imie", "Michal")
// pobranie wartości value Hans
    let niewiem = $("#niewiem");
    console.log(niewiem.val());

    // wstawianie wartosći Karolina do inputu do formularza
    niewiem.val("Karolina");

    // pobranie wartosci  nagłówka h3 o id elementh3
    let elementh3= $("#elementh3");
    // wywołanie 
    console.log(elementh3);

    elementh3.text("Marta")









    } );