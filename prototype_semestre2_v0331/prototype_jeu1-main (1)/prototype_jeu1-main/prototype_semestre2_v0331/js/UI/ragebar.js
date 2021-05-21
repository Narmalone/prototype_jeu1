class rageBar extends Phaser.GameObjects.Graphics{
    constructor(scene,x,y){
        super(scene,x,y);
        scene.add.existing(this);

        this.x = x;
        this.y = y;
        this.fillStyle( 0xfff );
        this.fillRect(this.x, this.y, 0, 16);        
        value = 0;
        this.valueMax = 100;
        this.rage = false;
        this.timedEvent = scene.time.addEvent({ delay: 5000, callback: this.rageActivated, callbackScope: this});
    }

    rageActivated(){
        this.clear();
        this.rage = true
        console.log('rage active !')
        this.fillStyle(0xff0000)
        this.fillRect(this.x,this.y,this.valueMax,16)
        
    }

    removeValue(){
        this.clear();
        percentValue = value/this.valueMax*80;
        console.log(percentValue);
    }

    update(){

        if(this.rage == false){
            this.clear();
            percentValue = value / this.valueMax *80
            this.fillStyle(0xfff000)
            this.fillRect(this.x,this.y,this.timedEvent.getProgress()*80,16)
        }
    }
}