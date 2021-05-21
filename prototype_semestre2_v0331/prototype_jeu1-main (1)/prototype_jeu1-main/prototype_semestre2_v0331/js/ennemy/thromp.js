class thromp extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);

        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false
        this.setScale(0.28,0.28);
        
        this.scene.anims.create({
            key:'destroyPeople',
            frames: this.scene.anims.generateFrameNumbers('thromp', {start:0 , end:24}),
            frameRate: 10,
            repeat: -1

        })

        this.anims.play('destroyPeople')
        scene.physics.add.collider(this,joueur, this.colTromp,null,this)
    }


    colTromp(){
        console.log('heyhey')
        //enlever 500 points//
        // joueur.antiSpawnKill();
        scorePoints -= 50
        console.log(scorePoints)
    }


}