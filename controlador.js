let doctor1=document.getElementById("doctor1");
let fotodoctor1=document.getElementById("fotodoctor1");
let doctor2=document.getElementById("doctor2");
let fotodoctor2=document.getElementById("fotodoctor2");

doctor1.addEventListener("click",activarDoctor)
doctor2.addEventListener("click",activarDoctor2)

function activarDoctor(){

    console.log("hola")
    doctor1.classList.remove("bg-dark");
    fotodoctor1.classList.remove("invisible")

    setTimeout(function(){

        doctor1.classList.add("bg-dark");
        fotodoctor1.classList.add("invisible")

    },1000)
}
function activarDoctor2(){

    console.log("hola")
    doctor2.classList.remove("bg-dark");
    fotodoctor2.classList.remove("invisible")

    setTimeout(function(){

        doctor2.classList.add("bg-dark");
        fotodoctor2.classList.add("invisible")

    },1000)
}