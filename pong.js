function preload(){
    ball_touch_paddle=loadSound("ball_touch_paddel.wav");
    ball_missed=loadSound("missed.wav");
}

function setup(){
    video=createCapture(VIDEO);
    video.size(600,600);
    video.hide();
    canvas=createCanvas(600,600);
    canvas.parent("canvas");
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("🤩🤩Model Loaded🤩🤩");
}

function gotPoses(){
    console.log("for reasons:|");
}
