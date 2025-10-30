export class Player {
  name = "";
  health = 30;

  constructor(name) {
    this.name = name;
  }

  attack(target) {
    console.log(this.name + " attacks " + target.name + "!");
    target.health -= 10;
    console.log(target.name + "'s health is now " + target.health);
  }
}