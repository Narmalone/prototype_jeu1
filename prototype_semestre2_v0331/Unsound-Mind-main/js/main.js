var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{ y: 300},
            debug: false
        }
    },
    input: {
        gamepad: true,
        keyBoard: true
    },
    scene: [load, mainMenu, level1, UI, death, menuPause, credits, controls]
    
};



var gameState = 0

//création variable joueur//
//CREATION VARIABLES POUR ENNEMIES//
var ennemies;
//jumps du joueur//
var nCJumpMax = 2;
var nCountJump = 0;
var bswitch= false;


//collectibles//
var seringuesDopantes;
var calmants;


var platBlockSpawn;
var objplatBlock;

var objplatBlock2;
var scoreText;

var obj;
// SCORE//
var theScore;
var scorePoints;

//PAD CONTROLS//
var myPad;

var game = new Phaser.Game(config);