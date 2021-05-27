class menuPause extends Phaser.Scene {
    constructor(){
        super('menuPause')
    }

    create(){
        gameState = 4

        this.pause = this.add.text(window.innerWidth/2, 20, 'JEU EN PAUSE',{font: '30px Augusta', fill: 'white'})
        musicAmbiance1.pause()
        sautSong.pause();
        courseSong.pause();

        this.resume = this.add.text(20,200, 'REPRENDRE',{font: '30px Augusta', fill: 'white'})
        this.resume.setInteractive()
        this.resume.on('pointerup', function(pointer){
            yesMenu.play()
            this.scene.stop()
            musicAmbiance1.resume()
            sautSong.resume();
            courseSong.resume();
            this.scene.resume('level1');
            gameState = 3
        }, this);


        this.restart = this.add.text(20,400, 'RECOMMENCER LE NIVEAU',{font: '30px Augusta', fill: 'white'})
        this.restart.setInteractive()
        this.restart.on('pointerup', function(pointer){
            yesMenu.play()
            this.scene.pause()
            this.scene.start('level1')
            musicAmbiance1.resume()
            scorePoints = 0
        } ,this);


        this.retourMenu = this.add.text(20,600, 'RETOURNER VERS LE MENU',{font: '30px Augusta', fill: 'white'})
        
        this.retourMenu.setInteractive()
        this.retourMenu.on('pointerup', function(pointer){
            musicAmbiance1.stop()
            nonMenu.play()
            this.scene.stop('UI')
            this.scene.stop('level1');
            this.scene.start('Menu');
        }, this);

    }
}