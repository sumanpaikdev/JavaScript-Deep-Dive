// PROTOTYPAL INHERITANCE WITH CLASSES


// classes === constructor functions
// classes - create objects with shared methods

// function Student() {}

class Student {
    constructor(id, name, subjects = []) {
      this.id = id;
      this.name = name;
      this.subjects = subjects;      
    }  
      
    getStudentName() {
      return `Student: ${this.name}`  
    }
      
    addSubject() {}  
  }
  
  const student1 = new Student(1, 'Reed');
  console.log(student1.getStudentName());

//   **************************************************************
//   challenge 

// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:
class Film {
	//Your code here.
	constructor(id, title, director, releaseYear, genres = []) {
		this.id = id;
		this.title = title;
		this.director = director;
		this.releaseYear = releaseYear;
		this.genres = genres;
	}
	addGenre(genre){
		this.genres = [...this.genres, genre];
	}
	getFilmTitle() {
		return `title: ${this.title}`
	}
}
const film1 = new Film(1, "The First Film", "Suman Paik", 2023)
const film2 = new Film(2, "The Second Film", "Suman Paik", 2024)
film1.addGenre("Drama")
// console.log(film1.getFilmTitle())
console.log(film1)
// Rest of your code here. 
