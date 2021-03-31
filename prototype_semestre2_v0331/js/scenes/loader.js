//Cette scene sert à charger les assets lorsque le joueur lance le jeu//
class load extends Phaser.Scene {
    //constructeur//
    constructor(){
        //super//
        super('loader');
    }

    //Dans la fonction preload, on charge les assets//
    preload(){

        //CREATION DU JOUEUR//
        this.load.image('personnage','assets/personnage.png');

        //GENERATION DU NIVEAU//
        this.load.tilemapTiledJSON('level1','assets/tile/json/tilemap.json');
        this.load.image('platform','assets/tile/tileset.png');

        //GENERATION DE L'ENNEMI "RAT"//
        this.load.image('rat', 'assets/rat.png');

        //GENERATION DES TRIGGERS/LEVIERS//
        this.load.image('levier', 'assets/levier.png');

        // GENERATION DES CAISSES QUI SE FONT PAR TRIGGER//
        this.load.image('caisse','assets/caisse.png');
    }

    //par le create on va lancer la scene du menu du jeu//
    create(){

        //cette ligne va lancer après avoir les assets va démarrer la scene//
        this.scene.start('level1');
    }
}