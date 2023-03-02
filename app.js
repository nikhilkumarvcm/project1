const btn = document.getElementById("btn");
const hdr = document.getElementById("txt1");

btn.addEventListener('click',changeSize);

function changeSize(){
    hdr.style.fontSize = '40px'
}