let person = {
    fName : "Anthony",
    age : 29,
    enrolled : true,
    courses : ["CPAN1","CPAN2","CPAN3","CPAN4","CPAN5","WRIT1"],
    info : function(){
        console.log(this);
    },
    // addCourse : function(course){
    //     this.courses.push(course);
    // },
    // totalCourses : function(){
    //     console.log(this.courses.length);
    // }
}

console.log(person.fName);
console.log(person.age);

person.info();

const jsonString = JSON.stringify(person);
console.log(jsonString);
const newPerson = JSON.parse(jsonString);
console.log(newPerson);//Stringify stole it's function, JSON is not used to handle logic

let { fName , courses } = person;

console.log(fName);
console.log(courses);

let grades = [100,86,90,60,72,81]

let [ a, b ]  = grades
console.log(a);
console.log(b);

let student = {...person}
console.log(student);
// let student = person; What is the functional difference between these two commands? How is the output any different? 

student.graduationYear = 2026;
console.log(student.graduationYear);

// student.sGrades = grades;
// for (let i = 0; i<student.courses.length;){
//     student.courses[i] = student.courses[i]+" : "+student.sGrades[i]
//     i++;
// }
// console.log(student.courses); I don't know why I did this


let coursesArr = [...student.courses];
console.log(coursesArr);

student.addCourse = function(course){
    this.courses.push(course);
};
student.totalCourses = function(){
    console.log(this.courses.length);
};
student.totalCourses();
student.addCourse("CPAN6");
student.totalCourses();
