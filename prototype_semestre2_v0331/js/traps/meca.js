class Meca extends Phaser.GameObjects.Container {
    constructor(scene,x,y,texture, ID){
        super(scene,x,y);
        this.ID=ID;
        //position du body//
        this.setSize(50,50);
        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        this.spriteM = scene.add.sprite(0,0,texture);

        this.add(this.spriteM);
        this.body.allowGravity = false;

        this.textAction = false;
        scene.physics.add.overlap(this, joueur, this.activeLevier, null, this);
        this.textInteract = scene.add.text(0,-50,'E INTERACT', {fill: "white"}).setOrigin(0.5).setAlpha(0);
        this.add(this.textInteract);
        this.triggerState = 0;
        scene.physics.add.overlap(this,joueur,this.master,null,this);
        this.platMoovOn = false
        this.goOutOfMeca = 0

    }
    activeLevier(){
        this.textAction = true;
    }
    master(){
        this.platMoovOn = false
    }

    inMeca(){
        if(this.platMoovOn == false){
            this.platMoovOn = true
            this.isItInMeca();
            console.log('jarrive')
            // console.log(this.platMoovOn)

        }
    }
    // outMeca(){

    //     if(this.platMoovOn == true){
    //         console.log('tu peux sortir quand tu veux')

    //     }
    // }

    isItInMeca(){
        if(this.platMoovOn == true){
            if(this.goOutOfMeca <= 3){
                this.goOutOfMeca +=0.02
                console.log(this.goOutOfMeca)
            }
            if(this.goOutOfMeca>=3){
                this.goOutOfMeca = 3
                // this.outMeca();
                this.platMoovOn = false
            }
        }
    }

}