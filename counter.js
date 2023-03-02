const btnInc = document.getElementById("incBtn");
const val = document.getElementById("val");
const btnDec = document.getElementById("decBtn");
const btnReset = document.getElementById("rstBtn");

var counter = 0;

btnInc.addEventListener('click',IncreaseCounter);
btnDec.addEventListener('click',DecreaseCounter);
btnReset.addEventListener('click',Reset)

function IncreaseCounter(){
    counter = counter + 1;
    val.innerHTML = counter;
}
function DecreaseCounter(){
    counter = counter-1;
    val.innerHTML = counter;
}
function Reset(){
    counter = 0;
    val.innerHTML = 0;
}