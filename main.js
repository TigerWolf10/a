lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

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
}