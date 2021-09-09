// let saveEl = document.getElementById("previous")
// let countEl = document.getElementById("count-el")

count =0
function increment(){
    // count = count +1
    count +=1 
    // console.log(count)
   
    document.getElementById("count-el").innerText=count
}


function save(){
   
    saveStr = count + " -"
    document.getElementById("save-el").innerText =document.getElementById("save-el").innerText + saveStr 
   
    count=0
    document.getElementById("count-el").textContent=count
}


//for becaming  zero value after save button click
//let see the code

// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// count = 0
// function increment(){
//     count +=1
//     countEl.textContect
// }
// function save(){
//     savestr= count + " _"
//     saveEl.textContect +=saveStr
//     count =0
//     Document.getElementById(count-el).innerText= count 
// }

