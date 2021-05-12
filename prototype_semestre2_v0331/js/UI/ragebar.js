class rageBar extends Phaser.GameObjects.Graphics{
    constructor(scene,x,y){
        super(scene,x,y);
        scene.add.existing(this);

        this.x = x;
        this.y = y;
        this.fillStyle( 0xfff );
        this.fillRect(this.x, this.y, 0, 16);        
        this.value = 0;
        this.valueMax = 100;
        this.percentValue = 100;
        this.timedEvent = scene.time.addEvent({ delay: 3000, callback: this.rageActivated, callbackScope: this});
    }

    rageActivated(){
        this.clear();
        console.log('rage active !')
        this.fillStyle(0xff0000)
        this.fillRect(this.x,this.y,this.valueMax,16)
        
    }

    update(){
        this.percentValue = this.value / this.valueMax *80
        this.fillStyle(0xfff000)
        this.fillRect(this.x,this.y,this.timedEvent.getProgress()*80,16)

    }
}