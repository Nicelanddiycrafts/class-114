noseX = 0;
noseY= 0;


function preload(){
clown_nose = loadImage("https://i.postimg.cc/bvp6M8WV/image.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,20,20);
}

function take_snapshot(){
    save("RedNoseReindeer.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x -10;
        noseY = results[0].pose.nose.y -10;
                 }
    }
    
 function modelLoaded(){
    console.log('model is loaded');
    }