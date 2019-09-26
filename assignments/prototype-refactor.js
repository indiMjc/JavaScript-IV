/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(generalStatus) {
//     this.createdAt = generalStatus.createdAt;
//     this.name = generalStatus.name;
//     this.dimensions = generalStatus.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }
  
//   CharacterStats.prototype = Object.assign(GameObject.prototype);
  
//   function CharacterStats(stats) {
//     GameObject.call(this, stats)
//     this.healthPoints = stats.healthPoints;
//   }
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }
  
//   Humanoid.prototype = Object.assign(CharacterStats.prototype);
  
//   function Humanoid(characteristics) {
//     CharacterStats.call(this, characteristics);
//     this.team = characteristics.team;
//     this.weapons = characteristics.weapons;
//     this.language = characteristics.language;
//   }
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeing in ${this.language}.`;
//   }
  
//   Villain.prototype = Object.assign(Humanoid.prototype);
  
//   function Villain(move) {
//     Humanoid.call(this, move)
//     this.attack = move.attack;
//   }
  
//   Hero.prototype = Object.assign(Humanoid.prototype);
  
//   function Hero(move) {
//     Humanoid.call(this, move)
//     this.attack = move.attack;
//   }
   
//     const mage = new Humanoid({
//       createdAt: new Date(),
//       dimensions: {
//         length: 2,
//         width: 1,
//         height: 1,
//       },
//       healthPoints: 5,
//       name: 'Bruce',
//       team: 'Mage Guild',
//       weapons: [
//         'Staff of Shamalama',
//       ],
//       language: 'Common Tongue',
//     });
  
//     const swordsman = new Humanoid({
//       createdAt: new Date(),
//       dimensions: {
//         length: 2,
//         width: 2,
//         height: 2,
//       },
//       healthPoints: 15,
//       name: 'Sir Mustachio',
//       team: 'The Round Table',
//       weapons: [
//         'Giant Sword',
//         'Shield',
//       ],
//       language: 'Common Tongue',
//     });
  
//     const archer = new Humanoid({
//       createdAt: new Date(),
//       dimensions: {
//         length: 1,
//         width: 2,
//         height: 4,
//       },
//       healthPoints: 10,
//       name: 'Lilith',
//       team: 'Forest Kingdom',
//       weapons: [
//         'Bow',
//         'Dagger',
//       ],
//       language: 'Elvish',
//     });
  
//     const bowser = new Villain({
//       createdAt: new Date(),
//       dimensions: {
//         length: 5,
//         width: 5,
//         height: 10,
//       },
//       healthPoints: 30,
//       name: 'Bowser',
//       team: 'Koopa',
//       weapons: 'Fireball',
//       language: 'Reptile gibberish',
//       attack: 5
//     });
  
//     const mario = new Hero ({
//       createdAt: new Date(),
//       dimensions: {
//         length: 1,
//         width: 1,
//         height: 3,
//       },
//       healthPoints: 25,
//       name: 'Mario',
//       team: 'Mushroom Kingdom',
//       weapons: 'Red Shell',
//       language: 'Italian gibberish',
//       attack: 7
//     });
  
//     console.log(mage.createdAt);
//     console.log(archer.dimensions);
//     console.log(swordsman.healthPoints);
//     console.log(mage.name);
//     console.log(swordsman.team);
//     console.log(mage.weapons);
//     console.log(archer.language);
//     console.log(archer.greet());
//     console.log(mage.takeDamage());
//     console.log(swordsman.destroy());
//     console.log(mario);
//     console.log(bowser);