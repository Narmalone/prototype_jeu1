class trigger extends Phaser.GameObjects.Container {
    constructor(scene,x,y,texture, ID){
        super(scene,x,y);
        this.ID=ID;
        //position du body//
        this.setSize(50,50);
        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        this.spriteL = scene.add.sprite(0,0,texture);

        this.add(this.spriteL);
        this.body.allowGravity = false;

        this.textAction = false;
        scene.physics.add.overlap(this, joueur, this.activeLevier, null, this);
        this.textInteract = scene.add.text(0,-50,'E INTERACT', {fill: "white"}).setOrigin(0.5).setAlpha(0);
        this.add(this.textInteract);
        this.triggerState = 0;

    }
    activeLevier(){
        this.textAction = true;
    }

}