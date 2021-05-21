class seringueDopante extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setScale(0.2)
        

        scene.tweens.add({
            targets: this,
            duration: 2000,
            y:this.y-50,
            ease: 'linear',
            repeat: -1,
            yoyo: true
        })

        this.scene.anims.create({
            key:'moove',
            frames: this.scene.anims.generateFrameNumbers('seringueDopante', {start:0 , end:21}),
            frameRate: 5,
            repeat: -1

        })

        this.anims.play('moove');
    }

    colSeringue(){
        
    }

    update(){
        
    }
}