function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function substract(num1,num2){
    return num1-num2;
}
function divide(num1, num2){
    return num1/num2;
}
function operate(num1,num2,operator){
    return operator(num1,num2);
}
const display=document.querySelector(".display");
let x="";
let operatie;
let rezultat=0;
let numar1;
let numar2;

for(let i=0;i<document.querySelectorAll(".number").length;i++){
    
        document.querySelectorAll(".number")[i].addEventListener("click", function(){
            x=x+this.innerText;
            update(x);

            if(this.innerText==="+"){
                operatie="add";
                // alert(operatie);
                numar1=parseInt(x);
                // alert(numar1);
                x="";
            }
            else if(this.innerText==="-"){
                operatie="substract";
                numar1=parseInt(x);
                x="";
            }else if(this.innerText==="/"){
                operatie="divide";
                numar1=parseInt(x);
                x="";
            }else if(this.innerText==="*"){
                operatie="multiply";
                numar1=parseInt(x);
                x="";
            }
            if(this.innerText==="="){
                numar2=parseInt(x);
                if(operatie==="add"){
                    rezultat=add(numar1, numar2);

                }
                else if(operatie==="substract"){
                    rezultat=substract(numar1, numar2);

                }
                else if(operatie==="multiply"){
                    rezultat=multiply(numar1, numar2);
                    

                }
                else if(operatie==="divide"){
                    rezultat=divide(numar1, numar2);

                }
                
                display.textContent=rezultat;
            }
        });
}

function functie(number){
    let x="";
    x=x+number;
    alert(x);
}

function update(number){
    display.textContent=number;
}
const clearButton=document.querySelector("#clear-button");
clearButton.addEventListener("click", clear);
function clear(){
    display.textContent=null;
    x="";
}