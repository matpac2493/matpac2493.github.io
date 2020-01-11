"use strict";



// definicja funkcji ajax, method- są dwie metoda get- widoczne dane w przeglądarce, 
// metoda post- dane niewidoczne w przeglądarce ale są wysyłane
function ajax( method, url ) {
    
    
    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.

// obsługa zdarzenia funkcjia onreadtstatechange, funkcja się uruchomi, gdy wyślemy, send
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia, z kodu powyżej, są to kody przeglądarkowe
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP, wykorzystać z wikipedii kod 200- dane prawidłowo
            if ( httpReq.status == 200 ) {
                
                // zwrot danych, 
                var returnData = httpReq.responseText;

                console.log(returnData);     
            
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }
            
        }
    
    }


    // wysłanie danych do serwera
    httpReq.send();
}






// wywołujemy naszą funkcję ajax() :)    
ajax( "GET", "https://jsonplaceholder.typicode.com/users/1" );






