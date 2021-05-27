class death extends Phaser.Scene {
    constructor(){
        super('deathScene');

    }

    create(){
        gameState = 5

        sautSong.stop();
        courseSong.stop();
        musicAmbiance1.stop();

        this.textDeath = this.add.text(500, 100, 'VOUS ETES MORTS', {font: '45px Augusta', fill: 'white'})

        this.tryAgain = this.add.text(20,400,'RETENTEZ VOTRE CHANCE',{font: '30px Augusta', fill: 'white'})

        this.tryAgain.setInteractive()
        this.tryAgain.on('pointerup', function(pointer){
            this.scene.stop();
            this.scene.start('level1')
            this.scene.launch('UI')
            musicAmbiance1.play()

        }, this);

        this.goMenu = this.add.text(20,600, 'RETOURNER VERS LE MENU',{font: '30px Augusta', fill: 'white'})
        
        this.goMenu.setInteractive()
        this.goMenu.on('pointerup', function(pointer){
            this.scene.stop();
            this.scene.start('Menu');
            this.scene.launch('UI')
        }, this);

    }
}