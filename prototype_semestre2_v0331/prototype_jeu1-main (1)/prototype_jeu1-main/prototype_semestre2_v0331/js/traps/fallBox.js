class fallingBox extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,ID){
        super(scene,x,y,texture);
        this.ID=ID;
        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setScale(0.2,0.2);
    }
    
    
}