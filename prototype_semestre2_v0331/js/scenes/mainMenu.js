var textPlay;
var menuMusic;
class mainMenu extends Phaser.Scene {
    constructor(){
        super('Menu');

    }
    preload() {

    }

    create(){

        var musicConfig = {
            mute: false,
            volume: 0.15,
            rate: 1,
            detune: -1000,
            seek: 0,
            loop: true,
            delay:0
        }
            
        menuMusic = this.sound.add('menuMusic', musicConfig);
        textPlay = this.add.text(400,270, 'PLAY',{font: "100px",fill: "white"});
        menuMusic.play();

        
        textPlay.setInteractive();
        textPlay.on('pointerup', function(pointer){
            this.scene.start('level1');
            musicConfig = {
                mute:true
            }
        }, this);

    }
}