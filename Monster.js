class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        // locations of legs
        this.legRX = this.bodyX + 70;
        this.legRY = this.bodyY + 165;

        this.legLX = this.bodyX - 70; 
        this.legLY = this.bodyY + 165; 

        // location of arms 
        this.armRX = this.bodyX + 105;
        this.armRY = this.bodyY + 20;

        this.armLX = this.bodyX - 105; 
        this.armLY = this.bodyY + 20; 

        // location of eyes 
        // this.eyesX = this.bodyX + 50;
        // this.eyesY = this.bodyY + 50; 

        this.eyesX = this.bodyX;
        this.eyesY = this.bodyY - 50;


        // location of mouth 
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 20; 

        // location of smiling mouth 
        this.smilingMouthX = this.bodyX;
        this.smilingMouthY = this.bodyY + 50; 

        // location of fangs mouth 
        this.fangsMouthX = this.bodyX;
        this.fangsMouthY = this.bodyY + 50; 

        // location of nose 
        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 2;

        this.snotX = this.bodyX + 10;
        this.snotY = this.bodyY + 40;

        // location of horns
        this.rightHornX = this.bodyX + 50;
        this.rightHornY = this.bodyY - 85;

        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 85;

        // key pressed
        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;



    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // // body sprite
        // this.load.image("body", "body_redF.png");

        // // leg 
        // this.load.image("leg", "leg_redB.png");

        // // arms
        // this.load.image("arm", "arm_redB.png");

        // // eyes 
        // this.load.image("eye", "eye_cute_light.png");

        // // mouth 
        // this.load.image("mouth", "mouthB.png");

        // // smiling mouth 
        // this.load.image("smilingMouth", "mouth_closed_happy.png");

        // // fangs mouth
        // this.load.image("fangsMouth", "mouth_closed_fangs.png");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        // body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");

        // legs 
        my.sprite.legRight = this.add.sprite(this.legRX, this.legRY, "monsterParts", "leg_redB.png");
        my.sprite.legLeft = this.add.sprite(this.legLX, this.legLY, "monsterParts", "leg_redB.png");
        my.sprite.legLeft.flipX = true; 

        // arms 
        my.sprite.armRight = this.add.sprite(this.armRX, this.armRY, "monsterParts", "arm_redB.png");
        my.sprite.armLeft = this.add.sprite(this.armLX, this.armLY, "monsterParts", "arm_redB.png");
        my.sprite.armLeft.flipX = true; 
    
        // eyes 
        my.sprite.eyes = this.add.sprite(this.eyesX, this.eyesY, "monsterParts", "eye_cute_light.png");

        // smile 
        my.sprite.smile = this.add.sprite(this.smilingMouthX, this.smilingMouthY, "monsterParts", "mouthA.png");

        // fangs
        my.sprite.fangs = this.add.sprite(this.fangsMouthX, this.fangsMouthY, "monsterParts", "mouthF.png");

        // nose
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_red.png");

        // snot
        my.sprite.snot = this.add.sprite(this.snotX, this.snotY, "monsterParts", "snot_large.png");

        // horns 
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_red_horn_small.png");
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_red_horn_small.png");
        my.sprite.leftHorn.flipX = true;


        my.sprite.armRight.visible = true;
        my.sprite.armLeft.visible = true;

        my.sprite.fangs.visible = false;

        my.sprite.armRight.angle = -45;
        my.sprite.armLeft.angle = 45;

        my.sprite.legRight.angle = -15;
        my.sprite.legLeft.angle = 15;

        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
       
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.fKey.isDown) 
        {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }
        
        if(this.sKey.isDown) 
        {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }

        if(this.aKey.isDown) 
        {
            for(const property in my.sprite) 
            {
                my.sprite[property].x -= 1;
            }
        }

        if(this.dKey.isDown) 
        {
            for(const property in my.sprite) 
            {
                my.sprite[property].x += 1;
            }
        }



    }
       
}
