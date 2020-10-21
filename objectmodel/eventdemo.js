var hone=document.querySelector('#one')


hone.addEventListener("click",()=>{
hone.style.color="red";
hone.textContent="clicked";
})//function receiving two arguments1)event2)function


var htwo=document.querySelector('#two')

htwo.addEventListener("mouseover",()=>{
htwo.style.color="green";
htwo.textContent="mouse is currently over me"
})

var dbcl=document.querySelector('#three')

dbcl.addEventListener("dblclick",()=>{
    dbcl.style.color="cyan";
    dbcl.textContent="double clicked";
})

var txt=document.querySelector('#num').value

myfun=()=>{
    console.log
}