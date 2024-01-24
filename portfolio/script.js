let icon=document.querySelector(".icon")
let ul=document.querySelector("ul")
icon.addEventListener("click",()=>{
    ul.classList.toggle("showData")
    console.log(ul)
})
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;