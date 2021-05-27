class platMoove extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene
        this.body.allowGravity = false;
        this.setOrigin(0);
        this.body.setImmovable(true);
        this.moovCooldown = 0
        scene.physics.add.collider(this, this.scene.scene.get('level1').joueur);
        scene.physics.add.overlap(this, this.scene.invisibleBlock, this.platGoDown, null, this)
        scene.physics.add.overlap(this, this.scene.invisibleBlock2, this.platGoUp, null, this)

        this.body.setVelocityY(-150)
    }

    platGoDown(){
        this.body.setVelocityY(150)
    }
    platGoUp(){
        this.body.setVelocityY(-150)
    }

    update(){
        // if(this.body.velocity.y == 0){
        //     this.moovCooldown+=0.02
        //     this.scene.scene.get('UI').bar.addValue();

        // }

        if(this.body.blocked.up){
            this.body.setVelocityY(150)
            this.scene.scene.get('UI').bar.addValue();
        }
        if(this.body.blocked.down){
            this.body.setVelocityY(-150)
            this.scene.scene.get('UI').bar.addValue();
        }
    }

}