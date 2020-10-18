var str="ABABAC"

var  dict={}

for(char of str)

  if(char  in dict){
      console.log("First recursive character ",char)
      break

  }
  else{
    dict[char]=1

  }

