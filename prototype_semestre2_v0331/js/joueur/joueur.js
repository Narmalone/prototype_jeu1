//class joueur//
class player extends Phaser.GameObjects.Sprite{
    //constructeur avec options//
    constructor(scene,x,y,texture){
        //super//
        super(scene,x,y,texture);
        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.2,0.2);
        this.body.setSize(150, 400);

        //CONTROLLER//
        this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //jumps//
        //permet de compter le nombre de jumps//
        this.nCountJump = 0;
        //le nombre Maximal de jumps que peut faire le joueur//
        this.nCJumpMax = 2;
        //afin de ne pas faire les 2 sauts en même temps/marquer un temps de sépération//
        this.bswitch = false;  
        //créer un countdown afin d'initialiser le double jump//
        this.rcouldown = 0;      

        //vitesse//
        this.vmax = 200;
        this.speedX = 200
        this.speedY = -175;
        this.textAction;

    }

    

    update(){
        
        //Quand le personnage ne bouge pas//
        this.body.setVelocityX(0);

        if(joueur.body.onFloor()==true){
            nCountJump = 0;
        }

        //gauche//
        if(this.keyQ.isDown){
            this.body.setVelocityX(-this.speedX);
        }

        //droite//
        if (this.keyD.isDown){
            this.body.setVelocityX(this.speedX);
        }
        //augmenter l'itération pour le jump//
        if(this.keyZ.isDown && nCountJump<nCJumpMax && bswitch == false && joueur.body.onFloor()== true){
            this.bswitch = true;
            this.body.setVelocityY(this.speedY);
            nCountJump = 1;
            // console.log(nCountJump);
        }

        //controle de la velocité//
        if(this.speedX>this.vmax){
            this.speedX = this.vmax;
        }
        if(this.speedX<this.vmax){
            this.speedX=this.vmax;
        }

        //DOUBLE JUMP CD//
        //quand bswitch passe à true c'est à dire quand le nCjump == 1//
        if(this.bswitch == true){
            //couldown du saut//
            this.rcouldown +=0.02;
            // console.log(this.rcouldown);

            // console.log(this.rcouldown);
            //quand cooldown >= 0.5 le double saut//
            if(this.rcouldown >=0.5){
                //reset le bswitch//
                this.bswitch = false;

            }
        }
        //LES CONDITIONS POUR FAIRE LE SECOND SAUT//
        if(nCountJump == 1 && this.rcouldown>=0.5 && this.keyZ.isDown){
            //vélocitée du jump//
            this.body.setVelocityY(this.speedY);
            //reset du saut//
            nCountJump = 0;
            //reset du rcouldown//
            this.rcouldown = 0;
            // console.log(nCountJump);
        }

        //sans cette condition, le joueur ne peut pas sauter si il tombe alors que son nombre de jumps == 0//
        if(joueur.body.onFloor() == false && nCountJump == 0 && this.keyZ.isDown){
            this.body.setVelocityY(this.speedY);
            nCountJump = 2;
        }

       
       
       
    }

}