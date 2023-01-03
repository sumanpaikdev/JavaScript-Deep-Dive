// This is the normal method to create a student dataset 
// const student1 = {
//     id: 1,
//     name: "Suman",
//     subjects: [],
//     addSubject(subject) {
//         this.subjects = [...this.subjects, subject] 
//     }
// }

// student1.addSubject("Math")
// console.log(student1)

// ***********************************************************

// HERE I AM GOING TO CREATE STUDENT DATA OBJ THROUGH CONSTRUCTURE

// FIRST: Creating a Constructor function 

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name; 
    this.subjects = subjects;
}
Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
}

const student1 = new Student(1, "suman")
const student2 = new Student(2, "paik")

student1.addSubject("Math")
student2.addSubject("Bengali")

console.log(student1.subjects)
console.log(student2.subjects)


