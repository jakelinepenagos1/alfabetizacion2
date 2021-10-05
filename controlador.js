let chef1=document.getElementById("chef1");
let fotochef1=document.getElementById("fotochef1");
let chef2=document.getElementById("chef2");
let fotochef2=document.getElementById("fotochef2");
let contadorchef=0;

let doctor1=document.getElementById("doctor1");
let fotodoctor1=document.getElementById("fotodoctor1");
let doctor2=document.getElementById("doctor2");
let fotodoctor2=document.getElementById("fotodoctor2");
let contadordoctor=0;

let policia1=document.getElementById("policia1");
let fotopolicia1=document.getElementById("fotopolicia1");
let policia2=document.getElementById("policia2");
let fotopolicia2=document.getElementById("fotopolicia2");
let contadorpolicia=0;

let profesor1=document.getElementById("profesor1");
let fotoprofesor1=document.getElementById("fotoprofesor1");
let profesor2=document.getElementById("profesor2");
let fotoprofesor2=document.getElementById("fotoprofesor2");
let contadorprofesor=0;

chef1.addEventListener("click",activarChef)
chef2.addEventListener("click",activarChef2)

doctor1.addEventListener("click",activarDoctor)
doctor2.addEventListener("click",activarDoctor2)

policia1.addEventListener("click",activarPolicia)
policia2.addEventListener("click",activarPolicia2)

profesor1.addEventListener("click",activarProfesor)
profesor2.addEventListener("click",activarProfesor2)


function activarChef(){

    console.log("hola")
    chef1.classList.remove("bg-dark");
    fotochef1.classList.remove("invisible")
    contadorchef++;

    setTimeout(function(){

        if(contadorchef!=2){

        chef1.classList.add("bg-dark");
        fotochef1.classList.add("invisible")
            contadorchef--;
        
                }
                else {
                    let audio=new Audio("audio/audio.mp3");
                    audio.play();
                    let resultadochef=document.getElementById("resultadochef");
                    resultadochef.classList.remove("invisible")
                }

    },1000)
}
function activarChef2(){

    console.log("hola")
    chef2.classList.remove("bg-dark");
    fotochef2.classList.remove("invisible")
    contadorchef++;

    setTimeout(function(){

        if(contadorchef!=2){

            chef2.classList.add("bg-dark");
        fotochef2.classList.add("invisible")
                contadorchef--;
            
                    }
                    else {
                        
                    }
    

        

    },1000)
}

function activarDoctor(){

    console.log("hola")
    doctor1.classList.remove("bg-dark");
    fotodoctor1.classList.remove("invisible")
    contadordoctor++;

    setTimeout(function(){

        if(contadordoctor!=2){

        doctor1.classList.add("bg-dark");
        fotodoctor1.classList.add("invisible");
        contadordoctor--;
        console.log("t")

        }
        else {
            let audio=new Audio("audio/audio.mp3");
            audio.play();
            let resultadodoctor=document.getElementById("resultadodoctor");
            resultadodoctor.classList.remove("invisible")
            console.log("t")
        }

    },1000)
}
function activarDoctor2(){

    console.log("hola")
    doctor2.classList.remove("bg-dark");
    fotodoctor2.classList.remove("invisible")
    contadordoctor++;

    setTimeout(function(){

        if(contadordoctor!=2){

        doctor2.classList.add("bg-dark");
        fotodoctor2.classList.add("invisible")
        contadordoctor--;
        console.log("t")
    
            }
            else {
               
            }
    },1000)
}

function activarPolicia(){

    console.log("hola")
    policia1.classList.remove("bg-dark");
    fotopolicia1.classList.remove("invisible")
    contadorpolicia++;

    setTimeout(function(){

        if(contadorpolicia!=2){

            policia1.classList.add("bg-dark");
            fotopolicia1.classList.add("invisible")
             contadorpolicia--;
            
                    }
                    else {
                        let audio=new Audio("audio/audio.mp3");
                        audio.play();
                        let resultadopolicia=document.getElementById("resultadopolicia");
                        resultadopolicia.classList.remove("invisible")
                    }
    },1000)
}
function activarPolicia2(){

    console.log("hola")
    policia2.classList.remove("bg-dark");
    fotopolicia2.classList.remove("invisible")
    contadorpolicia++;

    setTimeout(function(){

        if(contadorpolicia!=2){

            policia2.classList.add("bg-dark");
        fotopolicia2.classList.add("invisible")
             contadorpolicia--;
            
                    }
                    else {
                        
                    }

    },1000)
}

function activarProfesor(){

    console.log("hola")
    profesor1.classList.remove("bg-dark");
    fotoprofesor1.classList.remove("invisible")
    contadorprofesor++;

    setTimeout(function(){

        if(contadorprofesor!=2){

            profesor1.classList.add("bg-dark");
            fotoprofesor1.classList.add("invisible")
            contadorprofesor--;
    
            }
            else {
                let audio=new Audio("audio/audio.mp3");
                audio.play();
                let resultadoprofesor=document.getElementById("resultadoprofesor");
                resultadoprofesor.classList.remove("invisible")
            }

       

    },1000)
}
function activarProfesor2(){

    console.log("hola")
    profesor2.classList.remove("bg-dark");
    fotoprofesor2.classList.remove("invisible")
    contadorprofesor++;

    setTimeout(function(){

        if(contadorprofesor!=2){

            profesor2.classList.add("bg-dark");
        fotoprofesor2.classList.add("invisible")
            contadorprofesor--;
    
            }
            else {
              
            }
    },1000)
}

