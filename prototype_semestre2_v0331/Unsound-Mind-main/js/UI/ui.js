class UI extends Phaser.Scene {
    constructor(){
        super('UI');
    }

    create(){
        scorePoints = 0
        scoreText = this.add.text(20,20, 'SCORE : ' + scorePoints, {font: '20px Augusta', fill: 'white'})

        this.bar = new rageBar(this, 20, 30);
    }
    
    update(){

        if(gameState == 3){
            scoreText.setText('SCORE : ' + scorePoints, {font: '20px comfortaa', fill: 'white'})

            scoreText.setVisible(true)
            this.bar.update()
        }
        else{
            scoreText.setVisible(false)
        }

        if(gameState == 5){
            this.scene.get('level1').joueur.inputs = false
            this.scene.start('deathScene')
        }
        

        if(gameState == 6){
            this.bar.stopBar()
            this.skipCredits = this.add.text(game.config.width-50,game.config.height -50,'RETOUR AU MENU', {font: '40px Augusta', fill: 'white'}).setOrigin(1,0.5)
            this.skipCredits.setInteractive()
            this.skipCredits.on('pointerup', function(pointer){
                nonMenu.play()
                menuMusic.stop()
                this.scene.stop()
                this.scene.stop('creditScene')
                this.scene.start('Menu')
            }, this)
        }

        if(gameState == 7){
            this.retourMenu = this.add.text(game.config.width-50,game.config.height -50,'RETOUR AU MENU', {font: '40px Augusta', fill: 'white'}).setOrigin(1,0.5)
            this.retourMenu.setInteractive()
            this.retourMenu.on('pointerup', function(pointer){
                nonMenu.play()
                menuMusic.stop()
                this.scene.stop()
                this.scene.stop('controlScene')
                this.scene.start('Menu')
            }, this)    
        }
    }

}