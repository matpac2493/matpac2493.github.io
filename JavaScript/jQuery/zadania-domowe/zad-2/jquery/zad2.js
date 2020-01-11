console.log("działa")


$(function () {


    
let p1 = $("#p1") 
let p2 = $("#p2") 
let p3 = $("#p3") 
let p4 = $("#p4") 
let p5 = $("#p5") 

let button = $("#button")
console.log(button)


let button2 = $("#button2")
console.log(button2)


$("#button").click(function () {
$("#p5").insertBefore("#p4");
$("#p4").insertBefore("#p3");
$("#p3").insertBefore("#p2");
$("#p2").insertBefore("#p1");


 

});
 


$("#button2").click(function () {
$("#p5").insertAfter("#p4");
$("#p4").insertAfter("#p3");
$("#p3").insertAfter("#p2");
$("#p2").insertAfter("#p1");

    
});





























})











