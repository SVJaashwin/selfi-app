var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
     var content =event.results[0][0].transcript;
     console.log(content);
     document.getElementById("textbox").innerHTML=content;
     if (content == "Take my selfie."){
        console.log("taking selfie");
        speak();
     }
}
function speak(){
    var synth = window.speechSynthesis;
    //var speak_data = document.getElementById("textbox").value;
    speak_data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
     
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function (){
        takeSnapshot();
         save();
    } ,5000);
}

Webcam.set({
    width: 360,height:240,image_format:"png",png_quality:90
});
var camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = " <img id='selfie' src='"+data_uri+"'>";
    })
}
function save(){
    var link =document.getElementById("voice");
    var photo =document.getElementById("selfie").src ;

    link.href=photo;

    link.click();
}