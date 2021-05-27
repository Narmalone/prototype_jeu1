class level1 extends Phaser.Scene{
    constructor(){
        super('level1');

    }

    create(){
        
        gameState = 3
        //GENERATION DE LA MAP//
        const map = this.make.tilemap({key:'level1'});

        const platformTiles = map.addTilesetImage('tilemap','platform');
        const background = map.createLayer('background', platformTiles,0,0).setAlpha(0.7)
        const pancartes = map.createLayer('pancartes', platformTiles,0,0);

        var platform = map.createLayer('platformer',platformTiles,0,0).setScale(1);
        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.keyEchap = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        platform.setCollisionByExclusion(-1, true);

        //CREATION DU JOUEUR//
      
        // 
        // CREATION DE LA FUCKING RAGE BAR oui ok merci Khénan
        // 
        // 
        var joueurObject = map.getObjectLayer('playerSpawn')['objects'];

        joueurObject.forEach(joueurObject=>{
            this.joueur = new player(this,joueurObject.x,joueurObject.y, 'coursePerso')
        })
        this.physics.add.collider(this.joueur, platform);

        this.invisibleBlock = []
        var platBlockObject = map.getObjectLayer('platBlockSpawn')['objects'];

        platBlockObject.forEach(platBlockObject=>{
            objplatBlock = new invisibleBlock(this,platBlockObject.x,platBlockObject.y, 'platBlockSpawn')
            this.invisibleBlock.push(objplatBlock);
        })
        

        //bloc invi 2//
        this.invisibleBlock2 = []
        var platBlockObject2 = map.getObjectLayer('platBlockSpawn2')['objects'];

        platBlockObject2.forEach(platBlockObject2=>{
            objplatBlock2 = new invisibleBlock2(this,platBlockObject2.x,platBlockObject2.y, 'platBlockSpawn')
            this.invisibleBlock2.push(objplatBlock2);
        })

        //CREATION DE LA PLATEFORMES DES ENNEMIS//
        const ennemyplatform = map.createLayer('ennemyplatform',platformTiles,0,0);
        ennemyplatform.setCollisionByExclusion(-1, true);

        //spawn ennemy//
        this.ennemies = [];
        //GET SPAWN POSITIONS//
        var ennemyObject = map.getObjectLayer('ennemySpawn')['objects'];

        //tableau//
        //FOR EACH//
        ennemyObject.forEach(ennemyObject =>{
            //CREATIONS DES RATS par leurs spawns//
            obj = new rat(this,ennemyObject.x, ennemyObject.y, 'ratSprite');
            this.ennemies.push(obj);
            // this.physics.add.collider(this.caisse, this.ennemies) 

        });
        
        //AJOUT DE COLLISIONS ENTRE LES ENNEMIES ET LEUR PLATEFORMES//
        this.physics.add.collider(this.ennemies, ennemyplatform);

        //SYSTEME DE LEVIER//
        //SPAWN LEVIER//
        this.levier = [];
        //GET DEPUIS LA MAP LE LAYEROBJECT//
        var triggerObject = map.getObjectLayer('levierSpawn')['objects'];
       //FOR EACH//
        triggerObject.forEach(triggerObject =>{
            this.objt = new trigger(this,triggerObject.x, triggerObject.y -35, 'levier',triggerObject.properties[0].value);
            this.levier.push(this.objt);
        })

        this.caisse = []
        var caisseObject = map.getObjectLayer('caisseSpawn')['objects'];

        caisseObject.forEach(caisseObject=>{
            this.objc = new fallingBox(this,caisseObject.x, caisseObject.y -40, 'caisse',caisseObject.properties[0].value);
            this.caisse.push(this.objc);
        })
        // this.collRat,null,this);
        // this.physics.add.collider(this.caisse, this.ennemies) 
        this.physics.add.collider(this.caisse, platform)

        this.physics.add.collider(this.caisse, this.joueur);
        // this.physics.add.collider(this.caisse, this.ennemies, this.collRat, null, this)

        myPad = this.input.gamepad.pad1;
        //meca spawn//
        this.meca = []
        var mecaObject = map.getObjectLayer('mecaSpawn')['objects'];

        mecaObject.forEach(mecaObject =>{
            this.objm = new Meca(this,mecaObject.x, mecaObject.y, 'levier');
            this.meca.push(this.objm);
        })

        this.platMoov = []
        var platMoovObject = map.getObjectLayer('platMoov')['objects'];

        platMoovObject.forEach(platMoovObject =>{

            this.objplat = new platMoove(this,platMoovObject.x, platMoovObject.y,'ascenseur')//, platBlockObject.properties[0].value
            this.platMoov.push(this.objplat);
        })

        this.platMoov2 = []
        var platMoovObject2 = map.getObjectLayer('platMoovLR')['objects'];

        platMoovObject2.forEach(platMoovObject2 =>{
            this.objplat2 = new platMooveLR(this,platMoovObject2.x, platMoovObject2.y,'ascenseur')
            this.platMoov2.push(this.objplat2);
        })
        this.physics.add.collider(this.platMoov2, platform);

        //---------------------------------COLLECTIBLES------------------------------//


        //SERINGUE DOPANTE//
        this.dopante = []
        var dopanteObject = map.getObjectLayer('seringueSpawn')['objects'];

        dopanteObject.forEach(dopanteObject =>{
            this.objSeringue = new seringueDopante(this,dopanteObject.x, dopanteObject.y-30, 'seringueDopante')
            this.dopante.push(this.objSeringue);
        })


        //CALMANTS//
        this.duCalme = []
        var duCalmeObject = map.getObjectLayer('calmantSpawn')['objects'];

        duCalmeObject.forEach(duCalmeObject =>{
            this.objCalmants = new calmant(this,duCalmeObject.x, duCalmeObject.y-30, 'calmants')
            this.duCalme.push(this.objCalmants);
        })

        //COFFRE
        this.coffres = []
        var coffreObject = map.getObjectLayer('coffreSpawn')['objects'];

        coffreObject.forEach(coffreObject =>{
            this.objCoffre = new coffre(this,coffreObject.x, coffreObject.y-50, 'coffre')
            this.coffres.push(this.objCoffre);
        })

        this.changeCam = []
        var changeCamObject = map.getObjectLayer('extraction')['objects'];

        changeCamObject.forEach(changeCamObject =>{
            this.objCam = new camMoove(this,changeCamObject.x, changeCamObject.y, 'meca')
            this.changeCam.push(this.objCam);
        })
        this.physics.add.overlap(this.objCam, this.joueur, this.colExtract, null, this)


        this.mortDeChute = []
        var mortChuteObject = map.getObjectLayer('mortChute')['objects'];

        mortChuteObject.forEach(mortChuteObject =>{
            this.objChute = new mortChute(this, mortChuteObject.x, mortChuteObject.y, 'meca')
            this.mortDeChute.push(this.objChute)
        })
        this.physics.add.overlap(this.mortDeChute, this.joueur, this.fall, null, this)

        this.porteSortie = []
        var sortieObject = map.getObjectLayer('sortie')['objects'];

        sortieObject.forEach(sortieObject =>{
            this.objSortie = new sortie(this, sortieObject.x, sortieObject.y, 'meca')
            this.porteSortie.push(this.objSortie)
        })
        this.physics.add.overlap(this.porteSortie, this.joueur, this.finito, null, this)

        //---------------------------------------CAMERA---------------------//
        //CAMERA 1.2,1.2//
        this.cameras.main.setZoom(1.2, 1.2)
        this.cameras.main.startFollow(this.joueur, true, 0.1,0.1)
        this.cameras.main.setFollowOffset(-200,10)
        // background.setScrollFactor(0.95,0.95)

        //--------------------------------PIEGES A PIC---------------------//
        this.picTrap = []
        var picObject = map.getObjectLayer('picTrapSpawn')['objects'];

        picObject.forEach(picObject =>{
            var delay = 0;
            var flip = false;

            if(picObject.properties){
                picObject.properties.forEach(prop=>{
                    if(prop.name == 'delay'){
                        delay = prop.value
                    }
                    else if (prop.name == 'flip'){
                        flip = prop.value
                    }
                })
            }

            this.objpic = new picTrap(this,picObject.x, picObject.y-55,'picTrap', delay, flip)
            this.picTrap.push(this.objpic); 
        })

        this.physics.add.collider(this.ennemies, this.caisse, this.ratJoueur, null, this)
    }

    ratJoueur(curEnnemy, curCaisse){
        if(curEnnemy.body.touching.up){
            curEnnemy.x -=2000;
            scorePoints += 500;
            console.log(this.ennemies)
        }
    }
    colExtract(){
        this.cameras.main.setFollowOffset(200,10)
    }
    fall(){
        this.scene.stop()
        this.scene.start('deathScene')
    }

    finito(){
        this.scene.stop()
        this.scene.start('creditScene')
    }
    update(){


        //UPDATE DES MOOVEMENTS DU JOUEUR//
        if(gameState == 3){
            this.joueur.update();
            obj.update()
            // this.objCoffre.alpha -=0.02

            this.platMoov.forEach(merciedouard =>{
                merciedouard.update();
            })
            
            this.platMoov2.forEach(merciedouard2 =>{
                merciedouard2.update();
            })
        }

        this.levier.forEach(levier => {


            if(levier.textAction){
                if(this.keyE.isDown){
                    this.caisse[levier.ID-1].body.allowGravity = true;
                    levier.spriteL.play('animLevier')
                    // this.scene.get('Menu').levierGo.once('levierSong', function(music){
                    // this.scene.scene.get('Menu').levierGo.play('levierSong', true)
                    // });

                }
                if(levier.textInteract.alpha<1){
                    levier.textInteract.alpha += 0.02
                }
    
            }else{
                if(levier.textInteract.alpha>0){
                    levier.textInteract.alpha -= 0.02
                }
            }
            levier.textAction = false;
    
        });
        this.meca.forEach(meca => {


            if(meca.textAction){
                if(this.keyE.isDown){
                    this.platMoov[meca.ID-1];
                }
                
                if(meca.textInteract.alpha<1){
                    meca.textInteract.alpha += 0.02
                }
    
            }
            else{
                if(meca.textInteract.alpha>0){
                    meca.textInteract.alpha -= 0.02
                }
            }
            meca.textAction = false
            
        });
        
        //UPDATE DES MOOVEMENTS DES RATS//
        for (let i = 0; i < this.ennemies.length; i++){
            this.ennemies[i].checkColl();
        }
        if(gameState == 3 && this.keyEchap.isDown){
            gameState = 4
            this.scene.pause()
            this.scene.launch('menuPause')
        }

        if(gameState == 5){
            this.scene.stop()
        }

    }
    
}