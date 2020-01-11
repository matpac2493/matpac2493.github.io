console.log("działa")

let formularz = document.getElementById("formularz")
formularz.addEventListener("submit", click)

function click(e) {
e.preventDefault();
    let liczba1 = document.getElementById("liczba1")
    let liczba2 = document.getElementById("liczba2")
    wynik1=parseInt(liczba1.value)
    wynik2=parseInt(liczba2.value)
    wynik=wynik1+wynik2
    console.log(wynik)
    document.getElementById("wynik").innerHTML= "<p>" +wynik +"</p>"
   

    return false;
   
}




