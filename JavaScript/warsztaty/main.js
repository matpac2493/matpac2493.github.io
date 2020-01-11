//Ustaw tło paragrafów-metoda przez HTML

function ustawTlo() {
    let mainParagraf=document.getElementsByTagName("p")
    mainParagraf[0].style.backgroundColor="red"
    mainParagraf[1].style.backgroundColor="yellow"
    console.log(mainParagraf[0].style)


}


// Ustaw tło paragrafów- metoda przed HTML DOM, wykorzystanie tej samej funkcji w wielu miejscach 

document.getElementById("useHtmlDom").onclick= ustawTlo



// Ustaw tło paragrafów-rejestrowanie zdarzeń za pomocą metody addEventListener()

document.getElementById("useAddEventListener").addEventListener("click",ustawTlo);