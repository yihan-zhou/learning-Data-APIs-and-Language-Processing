
var link = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
var apikey='&api-key=VukplcQ9xGbFpSmcmIvULv45uGQ2NibG';
var input;

function setup() {
  noCanvas();

  //select input
  input = select('#search');

  //select button
  var button= select('#submit');
  button.mousePressed(searching)
}

//when the mouse pressed the submit button, the function "searching" will be called to load data.
function searching(){
  var url=link+input.value()+apikey;
  loadJSON(url,gotData);
  }

//after we called the loadJSON, the customized url will be passed to load the data we want.
function gotData(data){
  //locating the article
  var articles = data.response.docs;

  //grab the info of the article and create html elements on the page.
  for (var i = 0; i < articles.length; i++) {
    createElement('h1',articles[i].headline.main);
    createP(articles[i].snippet);
  }
}

function draw(){
}
