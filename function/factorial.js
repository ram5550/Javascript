function factorial(num){

var i=1
var fact=1
while(i<=num){
    fact=fact*i
    i+=1
    }
    return fact
}

var data=factorial(5)
console.log(data)
