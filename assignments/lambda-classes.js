// CODE here for your Lambda Classes


class GameObject {
    constructor(generalStats) {
        this.createdAt = generalStats.createdAt;
        this.name = generalStats.name;
        this.dimensions = generalStats.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(hp) {
        super(hp);
        this.healthPoints = hp.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(character) {
        super(character);
        this.team = character.team;
        this.weapons = character.weapons;
        this.language = character.language;
    }
    greet() {
        return `${this.name} offers a greeing in ${this.language}.`;
    }
}

class Person {
    constructor(baseInfo) {
        this.name = baseInfo.name;
        this.age = baseInfo.age;
        this.location = baseInfo.location;
    }
    speak() {
        return `Hello, my name is ${this.name}.  I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    }
    listSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun their sprint challenge on ${subject}.`
    }
}

class ProjectManagers extends Instructor {
    constructor(manage) {
        super(manage);
        this.gradClassName = manage.gradClassName;
        this.favInstructor = manage.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

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

    console.log(mage.createdAt);
    console.log(archer.dimensions);
    console.log(swordsman.healthPoints);
    console.log(mage.name);
    console.log(swordsman.team);
    console.log(mage.weapons);
    console.log(archer.language);
    console.log(archer.greet());
    console.log(mage.takeDamage());
    console.log(swordsman.destroy());