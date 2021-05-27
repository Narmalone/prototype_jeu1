class rat extends Phaser.GameObjects.Container{
    constructor(scene,x,y,texture){
        super(scene,x,y);
        //position DU BODY DE LA SOURIS//
        this.setSize(125, 55);
        this.scene = scene;
        //CREATION DE LA SOURIS//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        // Création du sprite
        this.sprite = scene.add.sprite(0, 0, texture);
        this.sprite.setScale(0.3,0.3);

        // Ajout du sprite au container
        this.add(this.sprite);
        
        // Création hitBox détéction
        this.detection = scene.add.image(0, 0);
        scene.physics.add.existing(this.detection);
        this.detection.body.allowGravity = false;
        this.detection.body.setSize(500, 75);

        // Ajout de la détéction au container
        this.add(this.detection);

        //VARIABLES DE l'ENNEMIS//

        //MOVEMENT//
        this.speedX = 150;

        //initialiser sa vélocité dans le create !!!//
        this.body.setVelocityX(this.speedX);

        //AJOUT DE L'OVERLAP ENTRE JOUEUR SOURIS PAR LA FONCTION CHASE//
        scene.physics.add.overlap(this.detection, this.scene.scene.get('level1').joueur, this.chase, null, this);
        scene.physics.add.overlap(this, this.scene.scene.get('level1').joueur, this.colRat, null, this);
        
        // scene.physics.add.overlap(this, this.scene.scene.get('level1').picTrap, this.colRP, null, this);


        this.resetBodyCooldown =0;
        this.resetBodySwitch = false;

        //ANIMS//
        this.scene.anims.create({
            key: 'walk',
            frames:this.scene.anims.generateFrameNumbers('ratSprite', {start:0 , end:8}),
            frameRate: 10,
            repeat: -1
        })

        this.sprite.anims.play('walk')
        this.attackReady = true
    }

    //fontion auquel si le rat collide avec un mur il change de direction//
    checkColl(){
        if (this.body.touching.right || this.body.blocked.right){
            this.body.setVelocityX(-this.speedX);
            this.sprite.flipX = false

        }
        else if (this.body.touching.left || this.body.blocked.left){
            this.body.setVelocityX(this.speedX);
            this.sprite.flipX = true
        }

    }
    colRat(){
        if(this.attackReady){
            this.scene.scene.get('UI').bar.addValueDMG();
            this.attackReady = false

            setTimeout(() => {
                this.attackReady = true
            }, 10000);
        }

    }
   
    colRP(){
        this.sprite.x -= 10000;
        scorePoints +=500;

    }

    //FONCTION CHASE//
    chase(){
        //TEST DU OVERLAP//
        if(this.body.x > this.scene.scene.get('level1').joueur.x){
            this.body.setVelocityX(-this.speedX);
            this.sprite.flipX = false
        }
        else if(this.body.x < this.scene.scene.get('level1').joueur.x){
            this.body.setVelocityX(this.speedX);
            this.sprite.flipX = true
        }
        if(this.body.x > this.scene.scene.get('level1').joueur.x && this.body.blocked.right){
            this.body.setVelocityX(this.speedX = 0);
        }
        if(this.body.x < this.scene.scene.get('level1').joueur.x && this.body.blocked.left){
            this.body.setVelocityX(this.speedX = 0);
        }
        if(this.body.y <= this.scene.scene.get('level1').joueur.y && this.body.blocked.left){
            this.body.setVelocityY(-150)
        }
        
    }

    update(){
        // if(this.resetBodySwitch == true){
        //     if(this.resetBodyCooldown<=5){
        //         this.resetBodyCooldown +=0.02
        //         this.body.setEnable(false)
        //     }
        //     if(this.resetBodyCooldown >= 5 && this.body.resetBodyCooldown == true){
        //         this.body.setEnable(true)
        //         this.resetBodyCooldown = 0
        //         console.log('body réactivé')
        //         this.checkColl();
        //         this.resetBodySwitch = false
        //     }
        // }

        // if(this.body.touching.up){
        //     this.colRP
        // }
    }

}