
var num1=Number(prompt("enter the number"))
temp=num1
reverse=0
while(num1!=0){
    rem=num1%10
    reverse=(reverse*10)+rem
    num1=parseInt(num1/10)
    }
if (temp==reverse){
    console.log("the number is palindrome")
    }
else{
    console.log("the number is not palindrome")
}