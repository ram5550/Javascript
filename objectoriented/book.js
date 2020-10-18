class Book{

    constructor(id,name,pageno,price){
    this.id=id;
    this.name=name;
    this.pageno=pageno;
    this.price=price;

    }

    getBook(){
        console.log(this.name);
        console.log(this.id)
    }


}

let obj=new Book(id:1,name:"book1",pageno:150,price:220);
let obj1=new Book(id:2,name:"book2",pageno:160,price:260);
let obj2=new Book(id:3,name:"book3",pageno:165,price:270);
let obj3=new Book(id:4,name:"book4",pageno:170,price:250);

var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)

for(item of arr){
    if(item["price"]>250){
        console.log(item)
    }

}