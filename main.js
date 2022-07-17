x = 0;
y = 0;
screen_width="0"
screen_height="0"

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth
 screen_height = window.innerHeight
 canvas.createCanvas(screen_width, screen_height-150)
 canvas.position()
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "set";
    for(){
      var i=1
      if(){
        i <= to_number i+1
      }
      Math.floor(math.random()*700)(x)
      Math.floor(math.random()*400)(y)
      document.getElementById("status").innerHTML= to_number +"apples drawn"
      speak()
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  loadImage("apple.png")
}

function recognition.onresult(){
  to_number = Number(content)
  if(Number.isInteger(to_number)).innerHTML ("status")="Started drawing apple"
  draw_apple == "set"
}
