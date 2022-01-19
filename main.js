x=document.getElementById("myAudio");
document.getElementById("my-btn").onclick=function(){
var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition;
document.getElementById("get_value").innerHTML="";
recognition.start();
recognition.onresult =function(e){
    console.log(e);
    var content= e.results[0][0].transcript;
    document.getElementById("get_value").innerHTML= content;
    console.log(content);
    if(content== "play happy birthday song"){
        speak();
        console.log("Playing the song");
    }
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data="Playing birthday song";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  Timer();
}
function Timer(){
    x.play();
}
}
headX=0;
headY=0;
function preload(){
    head=loadImage("https://i.postimg.cc/bvb61PZT/Happy-Birthday-Mom-Hat1.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function draw(){
    image(video,0,0,300,300);
    image(head,headX,headY,150,150)
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("head x="+results[0].pose.nose.x-80);
        console.log("head y="+results[0].pose.nose.y-200);
          headX=results[0].pose.nose.x-80;
          headY=results[0].pose.nose.y-200;
    };
}
function take_snapshot(){
    save("Happy Birthday Mom.png");
}