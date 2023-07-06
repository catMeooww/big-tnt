noseX = 0;
noseY = 0;
diference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){
    tnt = loadImage("tnt.png");
}
function setup(){
    canvas = createCanvas(600,400);
    video = createCapture(VIDEO);
    video.size(600,400);
    canvas.position(570,130);
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses);
}
function draw(){
    background(0,255,0);
    stroke("#f90093");
    image(tnt,noseX,noseY,diference,diference);
}
function modelLoaded(){
console.log("Loaded!");
}
function gotPoses(results){
if (results.length > 0) {
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
rightWristX = results[0].pose.rightWrist.x;
leftWristX = results[0].pose.leftWrist.x;
diference = floor(leftWristX - rightWristX);
console.log("X= "+noseX+" Y= "+noseY);
console.log("1= "+rightWristX+" 2= "+leftWristX);
console.log(diference);
document.getElementById("SquareWidth").innerHTML = "size= " + diference;
}
}

