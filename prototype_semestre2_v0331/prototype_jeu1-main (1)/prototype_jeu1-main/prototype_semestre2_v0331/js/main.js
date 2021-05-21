var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{ y: 300},
            debug: true
        }
    },
    input: {
        gamepad: true,
        keyBoard: true
    },
    scene: [load, mainMenu, level1]
    
};

//création variable joueur//
var joueur;
//CREATION VARIABLES POUR ENNEMIES//
var ennemies;
//jumps du joueur//
var nCJumpMax = 2;
var nCountJump = 0;
var bswitch= false;


//collectibles//
var seringuesDopantes;
var calmants;



// RAGE//
var bar;
var percentValue = 100;
var value = 0;



// SCORE//
var theScore;
var scorePoints = 0;

//TRAPS ET ENNEMIS//
var Thromp;

//PAD CONTROLS//
var myPad;

var game = new Phaser.Game(config);