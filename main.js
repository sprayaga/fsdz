function setup(){
    canvas=createCanvas(410,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    on.posenet('pose',getPoses)
}
function draw(){
image(video,0,0,410,300);
filter(GRAY);
}

function getPoses(results){
if(results.length>0){
    console.log(results);
    console.log('nose x='+results[0].pose.nose.x);
    console.log('nose y='+results[0].pose.nose.y)
}
}