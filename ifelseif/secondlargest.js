var num1=Number(prompt("enter value for num1"))
var num2=Number(prompt("enter value for num2"))
var num3=Number(prompt("enter value for num3"))


if((num1>num2)&(num1>num3)){
    if(num2>num3){
    alert("second largest is" +num2)
    }

    else{
     alert("second largest is" +num3)
    }

    }


else if((num2>num1)&(num2>num3)){
    if(num1>num3){
    alert("second largest is" +num1)
    }


    else{
    alert("second largest is" +num3)
    }

    }

else if((num3>num1)&(num3>num2)){
    if(num1>num2){
      alert("second largest is" +num1)
    }


else{
alert("second largest is" +num2)
}
}
