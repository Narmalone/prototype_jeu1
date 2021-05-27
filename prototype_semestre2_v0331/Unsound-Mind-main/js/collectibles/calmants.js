class calmant extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setScale(0.3)


        scene.tweens.add({
            targets: this,
            duration: 2000,
            y:this.y-50,
            ease: 'linear',
            repeat: -1,
            yoyo: true
        })

        scene.physics.add.overlap(this,this.scene.scene.get('level1').joueur,this.colCalmants,null,this)


    }


    colCalmants( curCalmants, joueur ){
        console.log('calmos')
        this.scene.scene.get('UI').bar.removeValue();
        curCalmants.x-=1000000;
        scorePoints += 50;
    }

}