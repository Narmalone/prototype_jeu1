var textPlay;
var menuMusic;
var musicAmbiance1;
var courseSong;
var sautSong;
var levierGo;

var textControls;
var textCredits;
var yesMenu;
var nonMenu;

class mainMenu extends Phaser.Scene {
    constructor(){
        super('Menu');
        game.config.backgroundColor = '#4488AA'
    }
 

    create(){

        gameState = 1

        yesMenu = this.sound.add('yesMenu')
        nonMenu = this.sound.add('nonMenu')
        //MUSIQUES//

        var musicConfig = {
            mute: false,
            volume: 0.10,
            rate: 1,
            detune: -200,
            seek: 0,
            loop: true,
            delay:0
        }
            
        menuMusic = this.sound.add('menuMusic', musicConfig);
        menuMusic.play();

        //AMBIANCE//

        var musicAmbiance1Config = {
            mute: false,
            volume: 0.15,
            rate:1,
            detune:0,
            seek:0,
            loop: true,
            delay:0
        }

        musicAmbiance1 = this.sound.add('musicAmbiance1', musicAmbiance1Config)

        this.textMenu = this.add.text(20,20, 'MENU',{font: "60px Augusta",fill: "white"})

        textPlay = this.add.text(game.config.width/2-200,game.config.height/2-100, 'PLAY',{font: "70px Augusta",fill: "white"});

        textPlay.setInteractive();
        textPlay.on('pointerup', function(pointer){
            yesMenu.play()
            menuMusic.stop()
            this.scene.start('level1');
            musicAmbiance1.play()
            this.scene.launch('UI')
        }, this);


        //BRUITS//
        //COURSE//
        var courseSongConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        courseSong = this.sound.add('coursePerso', courseSongConfig);


        var sautSongConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        sautSong = this.sound.add('sautPerso', sautSongConfig);


        var levierGoConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        levierGo = this.sound.add('levierSong', levierGoConfig)

        textControls = this.add.text(game.config.width/2-200,textPlay.y+100, 'CONTROLES',{font: "70px Augusta",fill: "white"})
        textControls.setInteractive();
        textControls.on('pointerup',  function(pointer){
            yesMenu.play()
            this.scene.stop()
            this.scene.start('controlScene')
            this.scene.launch('UI')
        }, this)
        
        textCredits = this.add.text(game.config.width/2-200,textControls.y+100, 'CREDITS',{font: "70px Augusta",fill: "white"})
        textCredits.setInteractive();
        textCredits.on('pointerup', function(pointer){
            yesMenu.play()
            this.scene.stop();
            this.scene.start('creditScene');
            this.scene.launch('UI');
        }, this);


        // textPlay.on('pointerover', function(event){
        //     // textPlay.destroy()
        //     textPlay.setTintFill(0xff0000)
        //     console.log('lol')
        // })
        textPlay.on('pointerover', function(event){
            // textPlay.destroy()
            textPlay.setTintFill(0x00ff00)
        })
        textControls.on('pointerout', function(event){
            textControls.setTintFill(0x00ff00)
        })
        textCredits.on('pointerover', function(event){
            textCredits.setTintFill(0x00ff00)
        })


    }


}