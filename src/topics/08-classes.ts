export class Person {
  // Esto es lo primero que se va a llamar cuando creamos una instancia de una clase
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string = "No address",
  ) {}
}

// Herencia
// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//   ) {
//     super(realName, "New York");
//   }
// }

// Composición
export class Hero {
  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony", "Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", tony);
console.log(ironman);
