
class Parent{
     phone(){
        console.log("parent have oneplus 6T");
    }
}

class Childone extends Parent{
    m1(){
        console.log("inside child one");
    }
}

class Child extends Childone{

}

let obj=new Child();
obj.phone()