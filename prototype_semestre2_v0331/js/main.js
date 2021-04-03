var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
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

//PAD CONTROLS//
var myPad;

var game = new Phaser.Game(config);