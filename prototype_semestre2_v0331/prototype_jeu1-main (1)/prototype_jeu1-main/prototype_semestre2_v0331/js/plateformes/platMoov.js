class platMoove extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setScale(0.1,0.1);
        this.setOrigin(0);

        scene.physics.add.collider(this, joueur);
        this.body.setImmovable(true);
    }

}