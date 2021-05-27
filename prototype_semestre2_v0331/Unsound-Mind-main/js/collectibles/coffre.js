class coffre extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture){
        super(scene,x,y,texture)

        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false



        scene.physics.add.overlap(this, this.scene.scene.get('level1'). joueur, this.colCoffre, null, this)
        this.setScale(0.5,0.5)
        this.alpha = 1
    }

    colCoffre(curCoffre, joueur){
        console.log('Cool des points')
        this.coffreHisTaken
        curCoffre.x -=10000;
        scorePoints += 2500;
    }
    coffreHisTaken(){
        if(this.alpha == 1){
            this.alpha -=5
            console.log(this.alpha)
        }
    }

}