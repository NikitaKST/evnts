import GameManager from './Game';

const gameFields = Array.from(document.querySelectorAll('.game-field'));
const gameManager = new GameManager(gameFields);
gameManager.start();
