var x =0;
var spaceData;

function setup() {
  createCanvas(400,400);
  loadJSON("http://api.open-notify.org/astros.json", gotData);
}

function gotData(data){
  spaceData=data;
}

function draw() {
  background(0);
  stroke(255);
  line(x, 0 , x , height);
  x++;
  if(x>width){
    x=0;
  }
  if(spaceData){
    randomSeed(5);
  for(var i=0; i<spaceData.number; i++){
    fill(255);
    ellipse(random(width),random(height),16,16);
    //createDiv(spaceData.people[i]);
    //console.log(spaceData.people[i]);
  }
  }
}
