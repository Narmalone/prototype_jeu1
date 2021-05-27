//class joueur//
class player extends Phaser.GameObjects.Sprite{
    //constructeur avec options//
    constructor(scene,x,y,texture){
        //super//
        super(scene,x,y,texture);
        //ajout de l'existance de l'objet et de sa physique//
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.3,0.3);
        this.body.setSize(150, 400)

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

        //vitesse//
        this.vmax = 300;
        this.speedX = 20;
        this.speedY = -250;
        this.textAction;
        this.body.setAllowDrag(true)
        this.inputs = true;
        this.inputState = 0;
        this.playerState = 0;

        this.platMoovante;


        if(gameState == 4){
            this.inputs = false
        }

        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNumbers('coursePerso', {start:0 , end:11}),
            frameRate: 10,
            repeat: -1
        })
            

    }

    update(){
        if(this.playerState == 0 && this.inputs == true){
            this.body.setDrag(1000,0);

            if(Math.abs(this.speedX && this.inputs == true) >= 200){
                // this.inputs = false
                // console.log(this.speedX)
                this.body.setDrag(200,0);
            }
            if(Math.abs(this.speedX && this.inputs == true) <= -200){
                // this.inputs = false
                console.log(this.speedX)
                this.body.setDrag(200,0);
            }
            //Quand le personnage ne bouge pas//

            if(this.body.onFloor()==true){
                nCountJump = 0;
            }
            
            

            //gauche//
            if(this.keyQ.isDown && this.inputs == true){
                this.speedX -= 5;
                this.anims.play('run')
                if(this.speedX <= -200){
                    this.speedX = -200

                }
                this.body.setVelocityX(this.speedX);

            }

            //droite//
            if (this.keyD.isDown && this.inputs == true){
                this.speedX += 5;
                this.anims.play('run')

            if(this.speedX >= 200){
                this.speedX = 200
                
            }
            this.body.setVelocityX(this.speedX);
            }
            if(this.keyD.isUp && this.keyQ.isUp && this.inputs == true && !myPad){
                this.speedX = 0
                courseSong.play()

            }
            if(this.keyZ.isDown && this.keyQ.isDown || this.keyD.isDown && this.body.onFloor()== false){
                courseSong.stop();
            }

            //augmenter l'itération pour le jump//
            if(this.keyZ.isDown && nCountJump<nCJumpMax && this.inputs == true && bswitch == false && this.body.onFloor()== true){
                this.bswitch = true;
                this.body.setVelocityY(this.speedY);
                nCountJump = 1;

            }

            
    
            if(myPad){


                if(myPad.A && nCountJump<nCJumpMax && bswitch == false && joueur.body.onFloor()== true && this.inputs == true){
                    this.bswitch = true;
                    this.body.setVelocityY(this.speedY);
                    nCountJump = 1;
                }
                if(myPad.B && this.inputs == true){
                }
                if(myPad.leftStick.x < 0 && this.inputs == true){
                    this.speedX -= 2;
                    // console.log(this.speedX)
                    if(this.speedX <= -200){
                        this.speedX = -200
                    }
                    this.body.setVelocityX(this.speedX);
                }
                if(myPad.leftStick.x > 0 && this.inputs == true){
                    this.speedX += 2;
                    if(this.speedX >= 200){
                        this.speedX = 200
                    }
                    this.body.setVelocityX(this.speedX);
                }
            }
        }


    }
}

