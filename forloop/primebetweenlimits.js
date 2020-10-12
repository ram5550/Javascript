
var low=Number(prompt("enter a low limit number"))
var upp=Number(prompt("enter a upp limit number"))

for (let i=low;i<upp+1;i++){
    flag = 0
    for (let j=2;j<i;j++){
        if(i%j==0){
            flag=1
            break
            }
            }
    if(flag==0){
        alert(i)
        }
        }