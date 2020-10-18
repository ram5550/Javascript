class Parent{


    phone(){
        console.log("parent have nokia")
    }
}

class Child extends Parent{

    phone(){
        console.log("have i phone")
    }
}

lst obj=new Child()
obj.phone()