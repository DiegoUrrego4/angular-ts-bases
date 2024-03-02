function addNumbers(a: number, b: number): number {
    return a + b;
}

const result = addNumbers(1, 2);
console.log({result});

// Arrow functions
const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

const result2 = addNumbersArrow(3, 5);
console.log({result2});

// Se aconseja ponerlos en este orden: 1. Obligatorios 2. Opcionales 3. Opcionales con valor por defecto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    console.log(secondNumber); // Esto no es necesario
    return firstNumber * base;
}

const multiplyResult = multiply(5);
console.log(multiplyResult);


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
};

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
};

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();


export {};