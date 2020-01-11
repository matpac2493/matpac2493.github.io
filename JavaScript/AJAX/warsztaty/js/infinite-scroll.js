// console.log("działa")


// podpiecie się  pod scrolla zdazeniem windom adevenlistener

window.addEventListener("scroll", function dziala() {
    console.log(dziala)
    
})

// document.addEventListener("scroll",function dziala() {
//     console.log(dziala);
    
// })


let d= document.documentElement;

let offsetHeight = d.offsetHeight;
// console.log(offsetHeight);

let inerHeight=window.innerHeight;

// console.log(inerHeight);

let scrollTop = d.scrollTop;
// console.log(scrollTop);

// funkcja ceil zaokrągla 
let sumScrollTopInnerHeight=Math.ceil(scrollTop+inerHeight);
console.log(offsetHeight);

console.log(sumScrollTopInnerHeight);







if (sumScrollTopInnerHeight=offsetHeight) 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => Response.json()
    .then(response)
        {
        console.log(resp);
    })



    

