class level1 extends Phaser.Scene{
    constructor(){
        super('level1');
    }

    create(){

        //GENERATION DE LA MAP//
        const map = this.make.tilemap({key:'level1'});
        const platformTiles = map.addTilesetImage('tilemap','platform');
        const platform = map.createLayer('platformer',platformTiles,0,0);
        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.interactionCount = 0

        //CREATION DU JOUEUR//
        joueur = new player(this,40,200,'personnage');
        platform.setCollisionByExclusion(-1, true);
        this.physics.add.collider(joueur, platform);
        // 
        // 
        // 
        // 
        // CREATION DE LA FUCKING RAGE BAR oui ok merci Khénan
        // 
        // 
        // 
        //
        bar = new rageBar(this, joueur.x, joueur.y);


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
            this.obj = new rat(this,ennemyObject.x, ennemyObject.y, 'rat');
            this.ennemies.push(this.obj);
        });
        
        //AJOUT DE COLLISIONS ENTRE LES ENNEMIES ET LEUR PLATEFORMES//
        this.physics.add.collider(this.ennemies, ennemyplatform);

        //COLLISIONS ENTRE LES SOURIS//
        // this.physics.add.collider(this.ennemies);

        //SYSTEME DE LEVIER//
        //SPAWN LEVIER//
        this.levier = [];
        //GET DEPUIS LA MAP LE LAYEROBJECT//
        var triggerObject = map.getObjectLayer('levierSpawn')['objects'];
       //FOR EACH//
        triggerObject.forEach(triggerObject =>{
            this.objt = new trigger(this,triggerObject.x, triggerObject.y, 'levier',triggerObject.properties[0].value);
            this.levier.push(this.objt);
        })

        this.caisse = []
        var caisseObject = map.getObjectLayer('caisseSpawn')['objects'];

        caisseObject.forEach(caisseObject=>{
            this.objc = new fallingBox(this,caisseObject.x, caisseObject.y, 'caisse',caisseObject.properties[0].value);
            this.caisse.push(this.objc);
        })

        this.physics.add.overlap(this.caisse, this.ennemies, this.collRat,null,this);
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
            this.objplat = new platMoove(this,platMoovObject.x, platMoovObject.y,'caisse')
            this.platMoov.push(this.objplat);
        })



        seringuesDopantes = new seringueDopante(this,200,200,'seringueDopante');
        this.physics.add.collider(seringuesDopantes,platform)

        calmants  = new calmant(this,400,200,'calmants');
        this.physics.add.collider(calmants,platform);

        // this.cameras.main.setZoom(0.4)

        Thromp = new thromp(this,600,200,'thromp')



        //SCORE//
        theScore = new score(this, joueur.x,joueur.y- 150)
    }
    collRat(curObject, curEnnemy){
        // this.disBody = true;
        this.physics.world.disable(curEnnemy);
        curEnnemy.setVisible(false);
    }
    update(){
        // this.rageCountDown-=0.02;
        // console.log(this.rageCountDown);

        //UPDATE DES MOOVEMENTS DU JOUEUR//
        joueur.update();
        seringuesDopantes.update();

        this.levier.forEach(levier => {


            if(levier.textAction){
                if(this.keyE.isDown){
                    // console.log(this.caisse[levier.ID-1]);
                    this.caisse[levier.ID-1].body.allowGravity = true;
                    
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
                    this.platMoovState = 1;
                    console.log('ça devrait bouger')
                }
                if(meca.textInteract.alpha<1){
                    meca.textInteract.alpha += 0.02
                }
    
            }else{
                if(meca.textInteract.alpha>0){
                    meca.textInteract.alpha -= 0.02
                }
            }
            
        });
        this.platMoov.forEach(platMoov =>{
            if(this.platMoovState == 1){
                platMoov.body.setVelocityY(-50)
            }
        })

        //UPDATE DES MOOVEMENTS DES RATS//
        for (let i = 0; i < this.ennemies.length; i++){
            this.ennemies[i].checkColl();
        }
        // this.objm.isItInMeca();
        bar.update();
    }
    
}