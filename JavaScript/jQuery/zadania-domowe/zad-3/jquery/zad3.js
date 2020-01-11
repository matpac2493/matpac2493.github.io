console.log ("działa")

// pobranie wszystkich elementów z body i nazwanie zmiennych 

$(function () {
 
    "use strict";

    let employees = $("#employees")
    console.log(employees)
    let person1 = $("#person1")
    console.log(person1)
    let person2 = $("#person2")
    console.log(person2)
    let person3 = $("#person3")
    console.log(person3)
    let person4 = $("#person4")
    console.log(person4)
    let person5 = $("#person5")
    console.log(person5)
    let sum     = $("#sum")
    console.log(sum)
    let button  = $("#count-sum")
    console.log(button)

    
    $(".salary" ).each(function(index) {
        console.log( index + ": " + $( this).text());
      });
  

















































})