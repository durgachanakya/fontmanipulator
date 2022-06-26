function setup(){
    canvas = createCanvas(480,400);
    canvas.position(600,150);
    background("white");
    
    video = createCapture(VIDEO);
    video.size(480,400);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);
    }
}

function draw(){
    background("black");
    fill("white");
    textSize(difference);
    text("Chanakya" , 100,100);
    
}