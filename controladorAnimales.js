let animalA1=document.getElementById("animalA1");
let fotoanimalA1=document.getElementById("fotoanimalA1");
let animalA2=document.getElementById("animalA2");
let fotoanimalA2=document.getElementById("fotoanimalA2");
let contadoRanimalA=0;

let animalB1=document.getElementById("animalB1");
let fotoanimalB1=document.getElementById("fotoanimalB1");
let animalB2=document.getElementById("animalB2");
let fotoanimalB2=document.getElementById("fotoanimalB2");
let contadoranimalB=0;

let animalC1=document.getElementById("animalC1");
let fotoanimalC1=document.getElementById("fotoanimalC1");
let animalC2=document.getElementById("animalC2");
let fotoanimalC2=document.getElementById("fotoanimalC2");
let contadoranimalC=0;

let animalD1=document.getElementById("animalD1");
let fotoanimalD1=document.getElementById("fotoanimalD1");
let animalD2=document.getElementById("animalD2");
let fotoanimalD2=document.getElementById("fotoanimalD2");
let contadoranimalD=0;

animalA1.addEventListener("click",activaranimalA1)
animalA2.addEventListener("click",activaranimalA2)

animalB1.addEventListener("click",activaranimalB1)
animalB2.addEventListener("click",activaranimalB2)

animalC1.addEventListener("click",activaranimalC1)
animalC2.addEventListener("click",activaranimalC2)

animalD1.addEventListener("click",activaranimalD1)
animalD2.addEventListener("click",activaranimalD2)


function activaranimalA1(){

    console.log("hola")
    animalA1.classList.remove("bg-dark");
    fotoanimalA1.classList.remove("invisible")
    contadoRanimalA++;

    setTimeout(function(){

        if(contadoRanimalA!=2){

        animalA1.classList.add("bg-dark");
        fotoanimalA1.classList.add("invisible")
            contadoRanimalA--;
        
                }
                else {
                    let audio=new Audio("audio/gallina.mp3");
                    audio.play();
                    let resultadoanimalA=document.getElementById("resultaanimalA");
                    resultadoanimalA.classList.remove("invisible")
                }

    },1000)
}
function activaranimalA2(){

    console.log("hola")
    animalA2.classList.remove("bg-dark");
    fotoanimalA2.classList.remove("invisible")
    contadoRanimalA++;

    setTimeout(function(){

        if(contadoRanimalA!=2){

            animalA2.classList.add("bg-dark");
        fotoanimalA2.classList.add("invisible")
                contadoRanimalA--;
            
                    }
                    else {
                        
                    }
    

        

    },1000)
}

function activaranimalB1(){

    console.log("hola")
    animalB1.classList.remove("bg-dark");
    fotoanimalB1.classList.remove("invisible")
    contadoranimalB++;

    setTimeout(function(){

        if(contadoranimalB!=2){

        animalB1.classList.add("bg-dark");
        fotoanimalB1.classList.add("invisible");
        contadoranimalB--;
        console.log("t")

        }
        else {
            let audio=new Audio("audio/leon.mp3");
            audio.play();
            let resultaanimalB=document.getElementById("resultaanimalB");
            resultaanimalB.classList.remove("invisible")
            console.log("t")
        }

    },1000)
}
function activaranimalB2(){

    console.log("hola")
    animalB2.classList.remove("bg-dark");
    fotoanimalB2.classList.remove("invisible")
    contadoranimalB++;

    setTimeout(function(){

        if(contadoranimalB!=2){

        animalB2.classList.add("bg-dark");
        fotoanimalB2.classList.add("invisible")
        contadoranimalB--;
        console.log("t")
    
            }
            else {
               
            }
    },1000)
}

function activaranimalC1(){

    console.log("hola")
    animalC1.classList.remove("bg-dark");
    fotoanimalC1.classList.remove("invisible")
    contadoranimalC++;

    setTimeout(function(){

        if(contadoranimalC!=2){

            animalC1.classList.add("bg-dark");
            animalC1.classList.add("invisible")
             contadoranimalC--;
            
                    }
                    else {
                        let audio=new Audio("audio/perro.mp3");
                        audio.play();
                        let resultaanimalC=document.getElementById("resultaanimalC");
                        resultaanimalC.classList.remove("invisible")
                    }
    },1000)
}
function activaranimalC2(){

    console.log("hola")
    animalC2.classList.remove("bg-dark");
    fotoanimalC2.classList.remove("invisible")
    contadoranimalC++;

    setTimeout(function(){

        if(contadoranimalC!=2){

            animalC2.classList.add("bg-dark");
        fotoanimalC2.classList.add("invisible")
             contadoranimalC--;
            
                    }
                    else {
                        
                    }

    },1000)
}

function activaranimalD1(){

    console.log("hola")
    animalD1.classList.remove("bg-dark");
    fotoanimalD1.classList.remove("invisible")
    contadoranimalD++;

    setTimeout(function(){

        if(contadoranimalD!=2){

            animalD1.classList.add("bg-dark");
            fotoanimalD1.classList.add("invisible")
            contadoranimalD--;
    
            }
            else {
                let audio=new Audio("audio/vaca.mp3");
                audio.play();
                let resultaanimalD=document.getElementById("resultaanimalD");
                resultaanimalD.classList.remove("invisible")
            }

       

    },1000)
}
function activaranimalD2(){

    console.log("hola")
    animalD2.classList.remove("bg-dark");
    fotoanimalD2.classList.remove("invisible")
    contadoranimalD++;

    setTimeout(function(){

        if(contadoranimalD!=2){

            animalD2.classList.add("bg-dark");
        fotoanimalD2.classList.add("invisible")
            contadoranimalD--;
    
            }
            else {
              
            }
    },1000)
}
