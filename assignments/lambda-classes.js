// CODE here for your Lambda Classes
// person constructor
class Person{
    constructor(file){
        this.name = file.name;
        this.age = file.age;
        this.location = file.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }

}
let hellen = new Person({name:'Hellen',age:20, location: 'Nairobi'});
//console.log ('hellen');
//console.log (hellen.speak());

// instructor constructor
class Instructor extends Person {
    constructor(file) {
        super(file);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        return(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}

let joshua = new Instructor ({name:'Joshua',age:22, location: 'Mombasa', speciality:'redux', favLanguage:'Python', catchPhrase:'Dont forget the homies'});
console.log('joshua');
console.log(joshua.demo('javascript'))
console.log(joshua.grade());


// student constructor
class Student extends Person {
    constructor(file) {
        super(file);
        this.previousBackground = file.previousBackground;
        this.className = file.className;
        this.favSubjects = file.favSubjects;
        this.projectManager = file.projectManager
        this.grade = 20;
    }

    listsSubjects() {
        const name = this.name;
         this.favSubjects.forEach(function(subject) {
             console.log(`${name} is studing ${subject}`);
         })
         return this.favSubjects;
     }
        
    
    PRAssignment(subject){
        return `${this.name} has  submitted a PR for ${subject}`

    }
    graduate() {
        while(this.grade < 70) {
            this.grade = this.projectManager.gradeStudent(this);
        }
        console.log(`${this.name} just graduated!`);
        return `${this.name} just graduated!`;
    }

}

let john = new Student ({name:'John',age:22, location: 'Mombasa', speciality:'redux', favLanguage:'Python', catchPhrase:'Dont forget the homies', previousBackground:'java', className: 'webu3', favSubjects:['math','English']});

console.log('john');
console.log(john.listsSubjects());
console.log(john.PRAssignment());

//project manager constructor

class ProjectManager extends Instructor {
    class ProjectManager extends Instructor {
        constructor (instructorfile) {
            super(file, instructorFile);
            this.gradClassName = pmFile.gradClassName;
            this.favInstructor = pmFile.favInstructor;
            this.channel = pmFile.channel;
        }
        standUp(slackChannel){
            return `${name} annouces to ${channel} @ channel standup times!`

        }
        debugsCode(student,subject){
            return `${name} debugs ${student.name}'s code on ${subject}`

        }
        studentsGrade(){
            Math.random
        }
    }

    let glad = new ProjectManager({name: "Glad", age: 30, location: "Kisumu"},{previousBackground: "research", className: "webeu2", favSubjects: "C++"}, {gradClassName:"CS1", favInstructor: "Sean", channel: "new slack"});

    console.log('glad');
    console.log(glad.standUp());
    console.log(glad.debugsCode());