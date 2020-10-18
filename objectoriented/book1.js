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

let obj=new Book(id:1,name:"book1",pageno:150,price:220)
let obj1=new Book(id:2,name:"book2",pageno:160,price:260)
let obj2=new Book(id:3,name:"book3",pageno:165,price:270)
let obj3=new Book(id:4,name:"book4",pageno:170,price:250)

var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)

arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)

var maxprice=0
var minprice=0

for(itemof arr){
    if(item["price"]>maxprice){
        maxprice=item["price"]
    }
    else{
        minprice=item["price"]
    }
}

for(item of arr){
    if(item["price"]>250){
        console.log(item)
    }
    if(item["price"]==maxprice){
        var maxbook=item["name"]
    }
     if(item["price"]==minprice){
        var minbook=item["name"]
    }
}

console.log("Book with maximum price is"+maxbook)
console.log("Book with minimum price is"+minbook)

for(item of arr){
    var upp=item["name"].toUppercase()
    console.log(upp)
}