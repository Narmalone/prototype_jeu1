class level1 extends Phaser.Scene{
    constructor(){
        super('level1');
    }

    create(){

        //GENERATION DE LA MAP//
        const map = this.make.tilemap({key:'level1'});
        const platformTiles = map.addTilesetImage('tilemap','platform');
        const platform = map.createLayer('platformer',platformTiles,0,0);

        //CREATION DU JOUEUR//
        joueur = new player(this,40,200,'personnage');
        platform.setCollisionByExclusion(-1, true);
        this.physics.add.collider(joueur, platform);
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
            // console.log(this.ennemies[index]);

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
        console.log(this.levier);

        this.caisse = []
        var caisseObject = map.getObjectLayer('caisseSpawn')['objects'];

        caisseObject.forEach(caisseObject=>{
            this.objc = new fallingBox(this,caisseObject.x, caisseObject.y, 'caisse',caisseObject.properties[0].value);
            this.caisse.push(this.objc);
        })

        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.physics.add.overlap(this.caisse, this.ennemies, this.collRat,null,this);
        myPad = this.input.gamepad.pad1;

    }
    collRat(curObject, curEnnemy){
        // this.disBody = true;
        this.physics.world.disable(curEnnemy);
        curEnnemy.setVisible(false);

        console.log(curEnnemy)
    }
    update(){

        //UPDATE DES MOOVEMENTS DU JOUEUR//
        joueur.update();
        this.levier.forEach(levier => {


            if(levier.textAction){
                if(this.keyE.isDown){
                    console.log(this.caisse[levier.ID-1]);
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

        //UPDATE DES MOOVEMENTS DES RATS//
        for (let i = 0; i < this.ennemies.length; i++){
            this.ennemies[i].checkColl();
        }
     
           
        
    }
    
}