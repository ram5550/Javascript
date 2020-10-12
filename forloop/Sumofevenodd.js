

var low=Number(prompt("enter low"))

var upp=Number(prompt("enter upper limit"))
var evensum=0
var oddsum=0
for ( i=low;i<upp+1;i++){
    if(i%2==0)
    {
        evensum=evensum+i
        }
    else{
        oddsum=oddsum+i
        }
        }

alert(evensum)
alert(oddsum)