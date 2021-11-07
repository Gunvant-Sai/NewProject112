x = 0;
y = 0;

var Apple = "";
draw_apple = "";
var to_number = "";
screen_width = "0";
screen_height = "0";
var x = "";
var y = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
    Apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event);

 content = event.results[0][0].transcript;

 to_number = Number(content);
  if(Number.isInteger(to_number))
  {
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

    draw_apple = "set"
  }

  else{
    document.getElementById("status").innerHTML = "It is not a Number";
  }

}

function setup() {
 canvas = createCanvas(10000,1000);
 screen_width = window.innerWidth;-100
 screen_height = window.innerHeight;-100
 canvas.position(0,150);
}

function draw() {
  if (draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() *700);
      y = Math.floor(Math.random() *400)
      image(Apple, x, y, 50, 50);
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
    }
    speak_data = to_number+"apple drawn";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
