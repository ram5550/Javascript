var arr=[5,6,7,8,9,10,11,12,13,14,15]

var num=Number(prompt("enter element to search"))

var flag=0
for (item of arr){

    if(item==num){
      flag=flag+1
      break
      }
    else{
        flag=0
        }
}
if(flag>0){
    console.log("element found")
    }
else{
    console.log("element not found")
    }
