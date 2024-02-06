import GameManager from './Game.js';

const gameFields = Array.from(document.querySelectorAll('.game-field'));
const gameManager = new GameManager(gameFields);
gameManager.start();