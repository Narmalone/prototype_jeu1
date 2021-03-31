class fallingBox extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);

        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setScale(0.2,0.2);
    }
    
    
}