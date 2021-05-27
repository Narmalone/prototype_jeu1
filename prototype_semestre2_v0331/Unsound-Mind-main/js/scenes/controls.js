class controls extends Phaser.Scene {
    constructor(){
        super('controlScene');
    }

    create(){
        gameState = 7


        this.commentPlaye = this.add.text(game.config.width/2-200, 20, 'COMMENT JOUER ?', {font: '48px Augusta', fill: 'white'})

        this.pressZ = this.add.text(20,300,'APPUYEZ SUR Z POUR SAUTER', {font: '30px Augusta', fill: 'white'})
        this.pressD = this.add.text(20,400,'APPUYEZ SUR D POUR ALLER A DROITE', {font: '30px Augusta', fill: 'white'})
        this.pressQ = this.add.text(20,500,'APPUYEZ SUR Q POUR ALLER A GAUCHE', {font: '30px Augusta', fill: 'white'})
        this.pressE = this.add.text(20,600,'APPUYEZ SUR E POUR INTERAGIR', {font: '30px Augusta', fill: 'white'})
        this.pressESC = this.add.text(20,700,'APPUYEZ SUR ECHAP EN JEU POUR METTRE EN PAUSE', {font: '30px Augusta', fill: 'white'})
    }
}