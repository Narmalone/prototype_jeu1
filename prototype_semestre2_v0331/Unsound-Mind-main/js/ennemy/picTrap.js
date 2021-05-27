class picTrap extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture, delay, flip){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false

        // this.id = id;
        this.delay = delay;
        this.scene = scene;
        this.setOn = false
        this.scene.anims.create({
            key: 'wait',
            frames: this.scene.anims.generateFrameNumbers('picTrap', {start: 0, end: 9}),
            frameRate: 10,
        })

        this.scene.anims.create({
            key:'action',
            frames: this.scene.anims.generateFrameNumbers('picTrap', {start: 10, end: 22}),
            frameRate: 10,
        })
        scene.physics.add.overlap(this, this.scene.scene.get('level1').joueur, this.colPic, null, this);

        this.scene.time.addEvent({delay: this.delay, callback: this.animWait, callbackScope: this})
        this.flipY = flip
        
    }

    animWait(){
        this.body.setEnable(false)
        this.anims.play('wait', true);
        this.timedPicUp = this.scene.time.addEvent({delay: 3000, callback: this.animAction, callbackScope: this})
    }
    animAction(){
        
        this.anims.play('action', true)
        this.timedPicStart = this.scene.time.addEvent({delay: 1300, callback: this.animWait, callbackScope: this})
        this.timedPicStart = this.scene.time.addEvent({delay: 430, callback: ()=>{
            if(this.setOn == true){
                this.body.setEnable(false)
            }
            if(this.setOn == false){
                this.body.setEnable(true)
            }
            
        }, callbackScope: this})

    }
    
    colPic(){
        this.body.setEnable(false)
        this.scene.scene.get('UI').bar.addValueDMG();
        this.scene.scene.get('UI').bar.antiSpawnKill()
    }

    dmgTaken(){
        this.setOn = true
        this.body.setEnable(false)
        this.scene.scene.get('UI').bar.antiSpawnKill();
    }
    dmgUnTaken(){
        this.setOn = false
        this.body.setEnable(true)
    }
}