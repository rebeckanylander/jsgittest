function renderMovie(movie){
	var picture = $("#picture");
	picture.attr("src", movie.picUrl); // Bättre än picture.src = movie.picUrl
	var movieTitle = $("#movieTitle");
	movieTitle.text(movie.title);
	var movieDescription = $("#movieDescription");
	movieDescription.text(movie.description);
	var actorsHeadline = $("#actorsHeadline");
	actorsHeadline.text(movie.actorsHeadline);
	var actorsList = $("#actorsList");
	for(let i in movie.actors){
		actorsList.append("<li>"+movie.actors[i]+"</li>");
	}
}

for(let i=1; i<=5; i++){
  let star = $("#star" + i);
  star.click(function(){
    changeStarRating(i);
  });
}

function changeStarRating(rating){
  for(let i=1; i<=5; i++){
    let star = $("#star" + i);
    if (i <= rating){
      star.addClass("filled");
    } else {
      star.removeClass("filled");
    }
  }
}

renderMovie(movieData);