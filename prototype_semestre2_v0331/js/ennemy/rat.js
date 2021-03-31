class rat extends Phaser.GameObjects.Container{
    constructor(scene,x,y,texture){
        super(scene,x,y);
        //position DU BODY DE LA SOURIS//
        this.setSize(50, 20);
        
        //CREATION DE LA SOURIS//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        // Création du sprite
        this.sprite = scene.add.sprite(0, 0, texture);
        this.sprite.setTintFill(0xfff);
        this.sprite.setScale(0.10,0.10);

        // Ajout du sprite au container
        this.add(this.sprite);
        
        // Création hitBox détéction
        this.detection = scene.add.image(0, 0);
        scene.physics.add.existing(this.detection);
        this.detection.body.allowGravity = false;
        this.detection.body.setSize(200, 100);

        // Ajout de la détéction au container
        this.add(this.detection);

        //VARIABLES DE l'ENNEMIS//

        //MOVEMENT//
        this.speedX = 150;

        //initialiser sa vélocité dans le create !!!//
        this.body.setVelocityX(this.speedX);

        //AJOUT DE L'OVERLAP ENTRE JOUEUR SOURIS PAR LA FONCTION CHASE//
        scene.physics.add.overlap(this.detection, joueur, this.chase, null, this);

    }

    //fontion auquel si le rat collide avec un mur il change de direction//
    checkColl(){
        if (this.body.touching.right || this.body.blocked.right){
            this.body.setVelocityX(-this.speedX);

            //changer de sens//
            // this.setScale(-0.10,0.10);  
        }
        else if (this.body.touching.left || this.body.blocked.left){
            this.body.setVelocityX(this.speedX);

            //changer de sens//
            // this.setScale(0.10,0.10);
        }

    }

    //FONCTION CHASE//
    chase(){
        //TEST DU OVERLAP//
        if(this.body.x > joueur.x){
            this.body.setVelocityX(-this.speedX);
            // console.log('tu es de gauche ?');
        }
        else if(this.body.x < joueur.x){
            this.body.setVelocityX(this.speedX);
            // console.log('tu es de droite ?');
        }
        if(this.body.x > joueur.x && this.body.blocked.right){
            this.body.setVelocityX(this.speedX = 0);
        }
        if(this.body.x < joueur.x && this.body.blocked.left){
            this.body.setVelocityX(this.speedX = 0);
        }
        if(this.body.y <= joueur.y && this.body.blocked.left){
            this.body.setVelocityY(-150)
        }
        
    }

}