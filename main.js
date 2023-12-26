song="";
LeftWristX= 0
LeftWristY = 0
RightWristX = 0
RightWristY = 0
function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLooad);
    poseNet.on('pose', gotPoses);
}

function modelLooad(){
    console.log('Pose Net foi inicializado')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("")

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        
        
    }
}

function draw() {
    image(video,0,0,600,500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}


 
