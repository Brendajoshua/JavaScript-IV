/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
  */
 /*function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  Person.prototype.greet = function() {
    return `Hi! My name is ${this.name}, I'm ${this.age} years old`
  }
  Person.prototype.eat = function(edible) {
    this.stomach.push(edible);
    return this.stomach;
  }
  Person.prototype.poop = function() {
    this.stomach = [];
    return this.stomach;
  }
  const brenda = new Person('Brenda', 20)*/
  // Refractor the code.
  
  class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = []; 
    }
    greet(){
        return `Hi! My name is ${this.name}, I'm ${this.age} years old`;
    }
    eat(edible){
        this.stomach.push(edible);
        return this.stomach;
    }
    poop(){
        this.stomach = [];
        return this.stomach;
    }
  }
  let brenda = new Person ('Brenda',20);
    /*
   TASK 2
  
    - Build a Car constructor that takes model name and make.
    - Give cars the ability to drive a distance.
    - By driving a car, the distance driven should be added to an "odometer" property.
    - Give cars the ability to crash.
    - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
    - Give cars the ability to be repaired.
    - A repaired car can be driven again.
  */
 /* function Car(name, make) {
    this.name = name;
    this.make = make;
    this.odometer = 0;
    this.canItDrive = true;
  }
  Car.prototype.drive = function(distance) {
    if(this.canItDrive === false) {
      return `I crashed at ${this.odometer} miles!`
    }
    this.odometer += distance;
    return this.odometer;
  }
  Car.prototype.crash = function() {
    this.canItDrive = false;
  }
  Car.prototype.repair = function() {
    this.canItDrive = true;
  }
  const toyota = new Car('Toyota', 'Corolla')
  // console.log(toyota.drive(100)); */
  
  // Refractor the code.
  class car{
      constructor(name, make){
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.canItDrive = true; 
      }
      drive(distance){
        if(this.canItDrive === false) {
            return `I crashed at ${this.odometer} miles!`;
      }
      this.odometer += distance;
    return this.odometer;

  }
  crash(){
    this.canItDrive = false;
  }
  repair(){
    his.canItDrive = true; 
  }
  
  //
  
  /*
    TASK 3
  
    - Build a Baby constructor that subclasses the Person built earlier.
    - Babies of course inherit the ability to greet, which can be strange.
    - Babies should have the ability to play, which persons don't.
    - By playing, a string is returned with some text of your choosing.
  */
  /*function Baby(name, age) {
    Person.call(this, name, age);
  }
  
  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function() {
    return "Yayy!!! I love playing";
  }
  const babyBrenda = new Baby('Baby Brenda', 2);*/
  // console.log(babyBrenda.greet());
  // console.log(babyBrenda.eat('Milk'));
  // console.log(babyBrenda.play());
  //Refractor code

  class Baby extends Person2 {
      constructor(name, age){
          super(name, age);
      }
      play(){
        return "Yayy!!! I love playing";
      }
  }
  
  let baaby = new Baby ('Joshua', 5);
  //console.log('baaby');
  //console.log(baaby.play());

  //display (baaby.play());
  /*
    TASK 4
  
    Use your imagination and come up with constructors that allow to build objects
    With amazing and original capabilities. Build 3 small ones, or a very
    complicated one with lots of state. Surprise us!
  */
  //Read constructor that takes book,publisher,genre
  //If a read is not interesting it should not be recommended
  //Otherwise it should display the authors name
  /*function Read (book,publisher,genre){
      this.book = book;
      this.publisher = publisher;
      this.genre = genre;
      this.interesting = false;
  }
  Read.prototype.recommend = function(){
    if(this.interesting){
      return 'I wont pick ${this.book} for my library'
    }
  }*/

  class Read{
      constructor(book,publisher,genr){
        this.book = book;
        this.publisher = publisher;
        this.genre = genre;
        this.interesting = false; 
      }
      recommend(){
        if(this.interesting){
            return 'I wont pick ${this.book} for my library'
          }
      }
  }
  /*
  
    STRETCH TASK
  
    Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
    In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
    At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
    Each constructor function has unique properties and methods that are defined in their block comments below:
  */
  
  /*
    === GameObject ===
    * createdAt
    * name
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
  function GameObject(obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  }

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function CharacterStats(obj) {
    GameObject.call(this, obj);
    this.healthPoints = obj.healthPoints;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  function Humanoid(obj) {
    CharacterStats.call(this, obj);
    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    /*
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  */