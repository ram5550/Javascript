class Bank{
   static getAccountDetails(){
        var data={
            test1:{username:"testone",password:"testone",accno:1000,balance:7000},
            test2:{username:"testtwo",password:"testtwo",accno:1001,balance:6000},
            test3:{username:"testthree",password:"testthree",accno:1002,balance:5000},

        }
        return data;
    }

static login(){
    let uname=document.querySelector("#uname").value;//test1
    console.log(uname)
    let pwd=document.querySelector("#pwd").value;//testone
    console.log(pwd)
    let data=Bank.getAccountDetails();
    console.log(data)

    if(uname in data){
        let password=data[uname]["password"];//data[uname]=data[test1]
        if(pwd==password){
            alert("login successful")
        }
        else{
            alert("password is incorrect")
        }
    }
    else{
        alert("no user exist")
    }
}
}