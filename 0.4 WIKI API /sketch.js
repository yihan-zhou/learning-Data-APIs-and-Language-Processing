let userInput;
let counter;

let searchJSON = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
//json link for the search result of the user input.

let contentJSON = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&formatversion=2&titles=';
//json link for the content of selected keyword.

let linkUrl = 'https://en.wikipedia.org/wiki/';
//link for the actual wikipage


function setup() {
  noCanvas();

  userInput = select('#userInput');
  userInput.changed(startSearch);
  //Get the keyword from user's input. If user's input has changed, call startSearch function.


  function startSearch(){
    counter=0;
    goWiki(userInput.value());
  }
  //Each time user's imput changes,aka search keyword changes, we reset the counter number and use the goWiki to search.

  function goWiki(term) {
    counter++;
    if(counter<10){
      let url = searchJSON + term;
      loadJSON(url, getSearch, 'jsonp');
      console.log(term);
      console.log(url);
    }
  }
  // Each time goWiki is called we will get a list of related wiki concepts.


  function getSearch(data){
    let len = data[1].length;
    let index = floor(random(len));
    let title = data[1][index];
    //Select a random wiki concept.

    title=title.replace(/\s+/g, '_');
    //Change the format for url via regular expression. this is a javascript function to replace all the space in a phrase with 'g' for global application.

    let linkurl=linkUrl+title;
    // console.log(title);
    //console.log("this is url link for "+title+linkurl);
    createA(linkurl,title);
    createElement('br');
    //Print out the wiki concept on canvas.

    let jsonurl=contentJSON+title;
    loadJSON(jsonurl,getContent,'jsonp');
    //Get the content json of that wiki concept.
  }

function getContent(data){
  let content = data.query.pages[0].revisions[0].content;
  //get the actual content part
  let wordRegex = /\b\w{4,}\b/g;
  var words=content.match(wordRegex);
  //find all the words with more than 4 characters.
  console.log("words: "+words[0]);
  var word=random(words);
  //Randomly pick one.

  goWiki(word);
  //now let's go back, and use this random selected keyword to search another list of wiki concepts.
}
}
