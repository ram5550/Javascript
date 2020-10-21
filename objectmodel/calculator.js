var txt=document.querySelector("#txt");

function display(num){ //7
let data=txt.value+num; //data=""+7=7
txt.value=data;


}

function clrscr(){
    txt.value="";
}

function calculate(){

    let data=txt.value; //we need to take the value which is already in text box ie,7+2*3
    let res=eval(data)  //eval used for string expression
    txt.value=res;
}