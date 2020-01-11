$(function () {
    let formPizzaOrder = $("#pizza-order");
    // console.log(formPizzaOrder);

    // pobranie imie z HTML 
    let imie = $("#first-name")
    console.log(imie)


    // pobranie nazwisko z HTML 
    let nazwisko = $("#last-name")
    console.log(nazwisko)

    // pobranie ulica z HTML 
    let ulica = $("#street")
    console.log(street)

    // pobranie ulica-numer z HTML 
    let numer = $("#street-no")
    console.log(numer)

    // pobranie kod pocztowy z HTML 
    let postCode = $("#post-code")
    console.log(postCode)

    // pobranie miasto z HTML 
    let miasto = $("#city")
    console.log(miasto)

    // pobranie pizza z HTML 
    let pizza = $("#pizza")
    console.log(pizza)

    // pobranie pizza-price z HTML 
    let price = $("#price")
    console.log(price)

    // pobranie sos pomidorowy z HTML 
    let tomatoSauce = $("#tomato-sauce")
    console.log(tomatoSauce)

    // pobranie sos czosnkowy z HTML 
    let garlicSauce = $("#garlic-sauce")
    console.log(garlicSauce)


    // pobranie agree z HTML 
    let agree = $("#agree")
    console.log(agree)

    // pobranie errors z HTML 
    let errors = $("#errors")
    console.log(errors)


    // stworzenie tablicy z cena pizzy, w srodku zapisane id od 1 do 5 bo jest 5 pizz, i 5 razy price jako cena i zapisana cena pizz
    let priceTable = [
        { id: 1, price: 29 },
        { id: 2, price: 32 },
        { id: 3, price: 41 },
        { id: 4, price: 39 },
        { id: 5, price: 36 },
    ];
    // podpinamy się pod zdarzenie change, do zmiany wyboru pizzy
    pizza.change(function () {
        let pizzaPrice = 0;

        // robimy zmienna pizzaType, tak aby wybierać tą pizze, i zwracać wartość wyboru funkcja val
        let pizzaType = $(this).val()

        // napisanie funkcji zeby nie wybierało itemu 0 Wybierz pizze, zapisujemy return, aby sie wykonało do tego, momentu return zawsze konczy funkcje, nie wykona sie nic co jest ponizej fukcji return
        if (pizzaType == 0) {
            price.text("0 PLN")
            return;
        }
        // pobranie ceny elementu z tabliy za pomocą pętli forEach, z funkcją anonimową z elementem, zapisanie warunku jeżeli element tablicy, o id (czyli tutaj od 1 do 5), równa się pizzaType, to zrób pizzaPrice ma się równać elemen.price- ponieważ .price to w tablicy cena poszczególnej pizzy
        priceTable.forEach(function (element) {
            if (element.id == pizzaType) {
                pizzaPrice = element.price
            }
            console.log(pizzaPrice)
        })

        // dopisanie do spana z ceną pizzy stringa PLN, czyli po wyborze pizzy, ma pokazać się obok cena 
        price.text(pizzaPrice + " PLN")
        console.log(pizzaType);
    })








    // walidacja formularza podpięcie się pod button submnit 

    formPizzaOrder.submit(function () {
        errors.empty();

        let errorsArray = [];

        if ($.trim(imie.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Imie" + "</li>")
        }

        if ($.trim(nazwisko.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Nazwisko" + "</li>")
        }

        if ($.trim(ulica.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Ulica" + "</li>")
        }



        if (errorsArray.length != 0) {

            errorsArray.forEach(function (element) {
                errors.append(element);
            });
            // console.log(errorsArray);
        }

        return false;

    });



});

 
// Sprawdzanie popranego pliku 
// 1. czy jest element w HTML
// 2. czy element w HTML ma jakiś uchwyt np. id
// 3. czy w js/jquery pobieramy po tym id
// 4. w konsoli sprawdzamy, czy ten obiekt został pobrany do zmiennej
// 5. czy starzenie jest podpięte do pobranego elementu np. submit/click itp.
// 6. czy nawiasy są ogarnięte
// 7. jesli to submit to czy jest return false; jeśli to click czy jest event.preventDefault()
