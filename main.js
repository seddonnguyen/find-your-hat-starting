const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }

    getPosition(row, col) {
        return this.field[row][col];
    }

    updatePosition(row, col, item) {
        this.field[row][col] = item;
    }

    print() {
        console.log(this.field.map(row => row.join('')).join('\n'));
    }

    static generateField(height, width) {
        let field = [];

        const getPosition = () => {
            let row = Math.floor(Math.random() * height);
            let column = Math.floor(Math.random() * width);
            return [row, column];
        }

        const populateItem = (num, item) => {
            let count = 0;
            do {
                let [row, col] = getPosition();
                if(field[row][col] === fieldCharacter) {
                    field[row][col] = item;
                    count++;
                }
            } while(count < num)
        }


        for(let i = 0; i < height; i++) {
            field[i] = Array(width).fill(fieldCharacter);
        }

        field[0][0] = pathCharacter;
        let numOfHoles = Math.floor(Math.random() * (height * width - 2)) + 1;
        populateItem(numOfHoles, hole);
        populateItem(1, hat);

        return field;
    }

}

const height = Math.floor(Math.random() * 10) + 1;
const width = Math.floor(Math.random() * 10) + 1;
const myField = new Field(Field.generateField(height, width));
let row = 0;
let col = 0;

do {
    console.clear();
    myField.print();
    let move = prompt("Which way? u (Up), d (Down), r (Right), l (Left)").trim();

    if(!/[udlr]/i.test(move)) {
        continue;
    }

    if(move === 'u') {
        row--;
    } else if(move === 'd') {
        row++;
    } else if(move === 'l') {
        col--;
    } else {
        col++;
    }

    if(row < 0 || row >= height || col < 0 || col >= width) {
        console.log("You fell outside the field.")
        break;
    }

    const position = myField.getPosition(row, col);
    if(position === hole) {
        console.log("You fell in the hole.");
        break;
    } else if (position === hat) {
        console.log("You won!");
        break;
    } else if (position === fieldCharacter) {
        myField.updatePosition(row, col, pathCharacter);
    }
} while(true);