// animacja napisana przez document ready

// $(document).ready(function(){
//     $("#button").click(function(){
//       $("#kwadrat").animate({right: '100px', height: '100px', width: '100px'});
//     });
//   });


//   animacja napisana przez $function 

$(function () {

    $("#button").click(function () {
      $("#kwadrat").animate({right:"100px", height: "100px", width: "100px"},3000,blue)


    });

  });


  function blue() {
      setTimeout(napis,5000)
    $("#kwadrat").css({
        'background-color': 'blue',
        'transition': '5s'
    });
}

function napis () {
    $("#kwadrat").append("animacja zakończona");


  }


// let red = $("#button").click(function () {
//     $("#kwadrat").animate({backgroundcolor : "red", right: "100px", height: "100px", width: "100px"},3000)


//  });

// //  let koniec = $("#button").click(function () {
// //     $("#kwadrat").animate({ right: "100px", height: "100px", width: "100px" })
// //  });

// //     if (red < koniec) {
// //         $("#kwadrat").animate({ backgroundcolor : "blue", right: "100px", height: "100px", width: "100px"},5000)
// //     }

//    function blue() {
//     $("#kwadrat").animate({ backgroundColor : "blue", right: "100px", height: "100px", width: "100px"},5000)



// //      }




// function niebieski () {
//     $("#kwadrat").css({"backgroundcolor" : "blue" , "transition" : "5s"})
// }








