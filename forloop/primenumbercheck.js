

var num=Number(prompt("enter a number"))

var flag=0
for (let i=2;i<num;i++){
    if(num%i==0){
        flag=1
        break
        }
    else{
        flag=0
        }
        }
if(flag>0){
    alert("not prime")
    }
else{
    alert("prime")
    }

