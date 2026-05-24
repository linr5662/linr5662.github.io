//queryselector :grabs the first instance of a specified HTML element.
//document.querySelector("p").innerHTML="he learned how to use queryselector today"

// function myFirstFunction(){
//     document.querySelector("#p2").
//     innerHTML="myFirstFunction changed the text to the text"

// }



// }
// // myFirstFunction()
// // ? document.queryselector ("p")

// //insread of modifying the first <p> element in the doc, modify the element with the ID of 'p2'

// document.querySelector("p").addEventListener("click", myFirstFunction)

// // document.querySelector("#p2").innerHTML="he learned how to use queryselector today"




function newfunction(){
    document.body.style.background = "blue"
}


window.addEventListener('keydown',(event)=>{
    newfunction()
})

console.log(4 + 7 - 10)

console.log(4 + 5)

let ruifeng =3

function addToNumber(){
  ruifeng = ruifeng + 3
  console.log(ruifeng)
}

document.querySelector("p").
addEventListener("click",addToNumber)

const element = document.getElementById("demo");

setInterval(function(){element.innerHTML+="hello"}, 1000)

