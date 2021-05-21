class score extends Phaser.GameObjects.Text {
    constructor(scene,x,y,Text){
        super(scene,x,y,Text);
        scene.add.text(0,0,'SCORE : ' + scorePoints, {fill: "white"})

    }

}