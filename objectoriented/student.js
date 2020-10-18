class Student{
    setStudent(roll,name,total){
        this.roll=roll;
        this.name=name;
        this.total=total;
    }
    getStudent(){
        console.log("name="+this.name);
        console.log("roll="+this.roll);
        console.log("total="+this.total)
    }
}

let obj=new Student()
obj.setStudent(1201,"manu",120);
obj.getStudent()