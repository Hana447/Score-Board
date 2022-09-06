let num1=0
let num2=0

let scoreHo=0
let scoreGe=0
let home=document.getElementById("score-HO")
let gest=document.getElementById("score-GU")
num2=scoreGe
let two1=scoreHo
let two2=scoreGe
let three1=scoreHo
let three2=scoreGe

function add1(){
num1=scoreHo+1
 scoreHo=num1
 home.textContent=scoreHo
}

function add2(){

num2=scoreGe+1
scoreGe=num2
console.log(scoreGe)
gest.textContent=scoreGe
}
function addtwo1(){
two1=scoreHo+2
scoreHo=two1
console.log(scoreHo)
home.textContent=scoreHo
}
function addtwo2(){

two2=scoreGe+2
scoreGe=two2
console.log(scoreGe)
gest.textContent=scoreGe
}
function addthree1(){
three1=scoreHo+3
scoreHo=three1
console.log(scoreHo)
home.textContent=scoreHo
}
function addthree2(){

three2=scoreGe+3
scoreGe=three2
console.log(scoreGe)
gest.textContent=scoreGe
}
function reset(){
    gest.textContent=0
    home.textContent=0
}