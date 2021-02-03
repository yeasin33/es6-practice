class Student{
    constructor(sId, sName){
        this.id= sId;
        this.name = sName;
        this.school = "bancharampur Technical School and collage";
    }

}

const student1 = new Student(22, "Mohammad");
const student2 = new Student(23, "yeasin");
const student3 = new Student(35, "arafat");
console.log(student1.id, student2.id,student3.school);