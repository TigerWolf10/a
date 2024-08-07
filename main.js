lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
slw = 0;
srw = 0;

song = "";

function preload(){
    song = loadSound("music2.mp3");
    song2 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initilised")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        slw = results[0].pose.keypoints[9].score;
        console.log("Left Wrist Score = "+slw);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        console.log("Left wrist X = "+lwx+" Left wrist Y = "+lwy);

        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log("Right wrist X = "+lwx+" Right wrist Y = "+lwy);
    }
}

function draw() {
    image(video,0,0,600,500);

    fill('#FF0000');
    stroke('#FF0000');

    if (slw > 0.2) {
        circle(lwx,lwy,20);
        song2.stop();
        if (song.isPlaying()== false){
            song.play();
            document.getElementById("song_name").innerHTML = "Song name: Peter Pan";
        }
    }
}  

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
