//task1
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };

    function propsCount(mentor) {
        return Object.keys(mentor).length;
    }
    propsCount(mentor);




//task2
let obj = {
        language1: "JavaScript",
        language2: "Python",
        language3: "C++",
        language4: "PHP",
        language5: "Java"
    }

    function showProps(obj) {
        console.log(Object.values(obj));
        console.log(Object.keys(obj));
    }
    console.log(showProps(obj))




//task3
class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    

        showFullName(){
            return this.name +this.surname + " ";
        }
    }

    class Student extends Person {
        constructor(name,surname,year) {
            super(name,surname);
            this.year = year;
        }
    
        showFullName(middleName) {
            return super.showFullName() + " " + middleName;
        }
        showCourse() {
            let date = new Date();
            let currentDate = date.getFullYear();
            return currentDate - this.date;
        }
    }
    let student = new Student("Anastassiya", "Romaniuk", 2012);
    console.log(student.showFullName("Valeriivna"));
    console.log(student.showCourse() + " course");





//task5 (підсвічується рядок з консольлогом, але помилки не знайшла)
class GeometricFigure {
		getArea() {
	        return 0;
        }
        toString() {
            return Object.getPrototypeOf(this).constructor.name;
        }
    }
    class Triangle extends GeometricFigure {
        constructor(b, h) {
            super();
            this.base = b;
            this.height = h;
        }
        getArea() {
            return b*h/2;
        }
    }
    class Square extends GeometricFigure {
        constructor(a) {
            super();
            this.side = a;
        }
        getArea() {
            return a*2;
        }
    }
    class Circle extends GeometricFigure {
        constructor(r) {
            super();
            this.radius = r;
        } 
        getArea() {
            return 2*Math.Pi*r;
        }
    }
    function handleFigures() {
        return figures.reduce(function() {
            for(figure instanceof GeometricFigure) {
                console.log("Geometric figure: ${figure.toString()} - area: ${figure.getArea()}");
                return sum + figure.getArea();
            }
        });
    }
    const figures = [new Triangle(5, 7), new Square(5), new Circle(7)];
    console.log(handleFigures(figures));

