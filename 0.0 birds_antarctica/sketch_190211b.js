var data;

function preload(){
  data = loadJSON("birds_antarctica.json");
}
function setup() {
  //console.log("hi")
  //createCanvas(400,400);
  //createP(bird);
  
  noCanvas();
  var birds = data.birds;
  for(var i=0; i<birds.length; i++){
    createElement('h1',birds[i].family);
    var members = birds[i].members;
    for(var j = 0; j < birds.length; j++){
      console.log(j);
      createDiv(members[j]);
    }
  }
}


function draw() {

}
