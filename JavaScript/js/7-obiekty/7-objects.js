let person = {
    name: 'Marcin',
    height: 2,
    waga: 150


}

let bmi = person.waga/Math.pow(person.height,2)
console.log(bmi)

let numer =Math.floor(Math.random()*500)
console.log(numer)


let raz =2
let dwa = 3


if(raz>0 && dwa>0) {
    alert("brawo")
}


fetch('https://jsonplaceholder.typicode.com/posts') 
.then(res=> res.json)
.then (res=> {

    for(let ele in res) {
        console.log(res[ele])
    }



}) 

let it=0
while (it<10) {
    console.log(it)
}
