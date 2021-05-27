class credits extends Phaser.Scene{
    constructor(){
        super('creditScene');

    }

    create(){
        gameState = 6
        sautSong.stop()
        musicAmbiance1.stop()
        courseSong.stop()
        menuMusic.play()

        this.credits = this.add.container(window.innerWidth/2, window.innerHeight/2+100);

        this.credits.add(this.add.text(0,200, 'CREDITS',{font: "100px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,300, 'UNSOUND MIND',{font: "100px Augusta",fill: "white"}).setOrigin(0.5))

        this.credits.add(this.add.text(0,300, 'REMERCIEMENTS AUX',{font: "100px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,400, ' PLAYTESTEURS',{font: "100px Augusta",fill: "white"}).setOrigin(0.5))


        this.credits.add(this.add.text(0,600, 'DEVELOPER',{font: "70px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,700, 'Bru Thomas',{font: "50px Augusta",fill: "white"}).setOrigin(0.5))

        this.credits.add(this.add.text(0,900, 'LEVEL DESIGNER',{font: "70px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,1000, 'Bru Thomas',{font: "50px Augusta",fill: "white"}).setOrigin(0.5))

        this.credits.add(this.add.text(0,1300, 'GAME DESIGNER',{font: "70px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,1400, 'Bru Thomas',{font: "50px Augusta",fill: "white"}).setOrigin(0.5))

        this.credits.add(this.add.text(0,1700, 'ARTIST',{font: "70px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,1800, 'Bru Thomas',{font: "50px Augusta",fill: "white"}).setOrigin(0.5))

        this.credits.add(this.add.text(0,2100, 'PLAYTESTERS',{font: "70px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,2200, 'BENANOU KHENAN',{font: "50px Augusta",fill: "white"}).setOrigin(0.5))
        this.credits.add(this.add.text(0,2300, 'EDOURD MORDANT',{font: "50px Augusta",fill: "white"}).setOrigin(0.5))

    }



    update(){
        this.credits.y -=1
    }
}