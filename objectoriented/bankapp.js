class Bank{


    static setBank(){
        bname="SBI";
    }
    constructor(accno,pname,bname){

        this.accno=accno;
        this.pname=pname;
        this.bname=bname;
        this.balance=3000;

    }

        deposit(amount){
            this.balance+=amount;
            console.log("account has been credited with"+this.balance+Bank.setBank)

        }

        withdraw(amount){
            if(amount>this.balance){
                console.log("insufficient balance")
                }

        }
        else
        {
            this.balance-=amount;
            console.log("account has been credited with"+this.balance)
        }
}