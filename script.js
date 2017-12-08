$(function() {
  $('button').on('click', function() {
    var randomMovieArray = ['Star Wars','Released','Game of Thrones',
    'Harry Potter', 'Who I Am' , 'Kill Bill'];
    var apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=1f944386&'
    function apiCall() {
      for (var i = 0; i < randomMovieArray.length; i++) {
        $.getJSON(apiUrl + "t=" + encodeURI(randomMovieArray[i]))
        .then((data)=> {
          $("ol").append("<li>" + data.Title + "<br/>"  + "Actors: "
          + data.Actors + "<br/>" + "Writer: " + data.Writer + "</li>");
        },(e)=> {
          alert(e);
        });
      }
    }
    apiCall();
    $('button').unbind();
  });
});
