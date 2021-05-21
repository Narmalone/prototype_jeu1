//Cette scene sert à charger les assets lorsque le joueur lance le jeu//
class load extends Phaser.Scene {
    //constructeur//
    constructor(){
        //super//
        super('loader');
    }

    //Dans la fonction preload, on charge les assets//
    preload(){

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(game.config.width/2 - 160, game.config.height/2 - 25 , 320, 50);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'CHARGEMENT...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(game.config.width/2 - 150, game.config.height/2 - 15, 300 * value, 30);
        });
        
        this.load.on('fileprogress', function (file) {
            assetText.setText('Chargement des assets: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        
        this.load.image('personnage','assets/personnage.png');
        //GENERATION DU NIVEAU//
        this.load.tilemapTiledJSON('level1','assets/tile/json/tilemap.json');
        this.load.image('platform','assets/tile/tileset.png');

        //GENERATION DE L'ENNEMI "RAT"//
        this.load.image('rat', 'assets/rat.png');

        //GENERATION DES TRIGGERS/LEVIERS//
        this.load.image('levier', 'assets/levier.png');

        this.load.image('meca', 'assets/mecaLevier.png');

        // GENERATION DES CAISSES QUI SE FONT PAR TRIGGER//
        this.load.image('caisse','assets/caisse.png');

        //GENERATION DES MUSIQUES ET SONS//

        //MUSIQUE DU MENU DU JEU//
        this.load.audio('menuMusic', 'assets/audio/menuMusic.mp3');
        this.load.audio('trollMusic','assets/audio/trollMusic.mp3');
        
        //SPRITESHEETS//
        this.load.spritesheet('seringueDopante', 'assets/spritesheet_seringueDopante.png',{frameWidth: 502, frameHeight: 779})
        this.load.image('calmants', 'assets/calmants.png');

    }

    //par le create on va lancer la scene du menu du jeu//
    create(){

        //cette ligne va lancer après avoir les assets va démarrer la scene//
        this.scene.start('Menu');
    }
}