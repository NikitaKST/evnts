import GameField from './Field.js';

export default class GameManager {
    constructor(fields) {
    this.gameField = new GameField(fields);
}

    start() {
        this.gameField.moveGoblin();
    }
}
