class rageBar extends Phaser.GameObjects.Graphics{
    constructor(scene,x,y){
        super(scene,x,y);
        scene.add.existing(this);

        this.scene = scene
        this.x = x;
        this.y = y;
        this.fillStyle( 0xfff );
        this.fillRect(this.x, this.y, 0, 50);   
        this.valueMax = 200;
        this.value = 0;
        this.rage = false;
        this.antiSpawnKillCouldown = 0
        this.antiSpawnKillSwitch = false

    }

    rageActivated(){
        this.clear();
        this.rage = true
        this.fillStyle(0xff0000)
        this.fillRect(this.x,this.y,this.value,50)

    }

    removeValue(){
        this.value -=5
        if(this.value < 0){
            this.value = 0
        }
    }

    addValue(){
        this.value +=10
        if(this.value >= this.valueMax){
            this.value = this.valueMax
        }
    }

    addValueDMG(){
        this.value += 20
        if(this.value >= this.valueMax){
            this.value = this.valueMax
        }
    }

    antiSpawnKill(){
        this.antiSpawnKillSwitch = true
    }

    stopBar(){
        this.destroy();
    }

    update(){

        if(this.antiSpawnKillSwitch == true){
            this.antiSpawnKillCouldown +=0.02
            if(this.antiSpawnKillCouldown < 7){
                this.scene.scene.get('level1').objpic.dmgTaken();
            }
            if(this.antiSpawnKillCouldown >= 7){
                this.scene.scene.get('level1').objpic.dmgUnTaken();
                this.antiSpawnKillSwitch = false
                this.antiSpawnKillCouldown = 0
            }
        }
        if(this.rage == false){
            this.clear();
            this.value +=0.01
            this.fillStyle(0xfff000)
            this.fillRect(this.x,this.y,this.value,50)
            if(this.value >=100){
                this.clear()
                this.fillStyle(0xffA500)
                this.fillRect(this.x,this.y,this.value,50)
            }
            if(this.value>= 175){
                this.clear()
                this.fillStyle(0xFF6347)
                this.fillRect(this.x,this.y,this.value,50)
            }
            if(this.value > this.valueMax){
                this.value = this.valueMax
                this.rageActivated();
            }
        }

        if(this.rage == true){
            this.rage = false
            gameState = 5
            this.value = 0
        }
    }
}