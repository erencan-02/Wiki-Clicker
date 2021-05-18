

function open_wiki(search_query){
  //No String formatting needed
  //Wikipedia doeas it automatically
  var url = 'https://wikipedia.org/wiki/' + search_query
  window.open(url,'_blank');
}


function process_input(e){
  //Detects mouse wheel click
  if(e && e.which == 2){
    var search_query = window.getSelection().toString().toLowerCase();
    if(search_query){
      open_wiki(search_query);
    }
  }
}


document.body.addEventListener('mousedown', process_input)
