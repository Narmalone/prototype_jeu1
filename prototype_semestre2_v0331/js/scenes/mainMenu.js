var textPlay;
var menuMusic;
class mainMenu extends Phaser.Scene {
    constructor(){
        super('Menu');

    }


    create(){
        textPlay = this.add.text(500,300, 'PLAY',{fill: "white"});
        textPlay.setInteractive();
        textPlay.on('pointerup', function(pointer){
            this.scene.start('level1');
        }, this);

        var musicConfig = {
            mute: false,
            volume: 0.30,
            rate: 1,
            detune: -1000,
            seek: 0,
            loop: true,
            delay:0
        }
        
        menuMusic = this.sound.add('menuMusic', musicConfig);
        menuMusic.play();
    }
}