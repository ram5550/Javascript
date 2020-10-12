
var num1=Number(prompt("enter the number"))

reverse=0
while(num1!=0){
    rem=num1%10
    reverse=(reverse*10)+rem
    num1=parseInt(num1/10)
    }
console.log(reverse)