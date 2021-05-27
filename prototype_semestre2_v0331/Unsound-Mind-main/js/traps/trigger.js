class trigger extends Phaser.GameObjects.Container {
    constructor(scene,x,y,texture, ID){
        super(scene,x,y);
        this.ID=ID;
        this.scene = scene
        //position du body//
        this.setSize(200,175);
        this.setScale(0.5,0.5)
        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        this.spriteL = scene.add.sprite(0,0,texture);
        
        this.add(this.spriteL);
        this.body.allowGravity = false;

        this.textAction = false;
        scene.physics.add.overlap(this, this.scene.scene.get('level1').joueur, this.activeLevier, null, this);
        this.textInteract = scene.add.text(0,-100,'E INTERACT', {font: '48px Augusta',fill: "white"}).setOrigin(0.5).setAlpha(0);
        this.add(this.textInteract);
        this.triggerState = 0;

        this.scene.anims.create({
            key: 'animLevier',
            frames: this.scene.anims.generateFrameNumbers('levier', {start: 0, end: 8}),
            frameRate: 9,
        })

    }
    activeLevier(){
        this.textAction = true;       
    }

}