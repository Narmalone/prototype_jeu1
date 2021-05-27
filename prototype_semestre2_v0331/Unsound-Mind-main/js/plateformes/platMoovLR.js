class platMooveLR extends Phaser.GameObjects.Sprite {
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

        this.body.setVelocityX(-150)
    }

    platGoDown(){
        this.body.setVelocityX(150)
        console.log('overlap à droite')
    }
    platGoUp(){
        this.body.setVelocityX(-150)
        console.log('overlap à gauche')

    }

    update(){

        if(this.body.blocked.left){
            this.body.setVelocityX(150)
        }
        if(this.body.blocked.right){
            this.body.setVelocityX(-150)
        }



        // if(this.body.velocity.x == 0){
        //     this.moovCooldown+=0.02
        //     console.log(this.moovCooldown)
        //     this.scene.scene.get('UI').bar.addValue();


        //     if(this.moovCooldown >= 5){
        //         this.platGoDown();
        //     }
        // }
    }

}