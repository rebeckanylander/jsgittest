let $ = require("jquery");
let movieData = require("./data");
console.log(movieData);
function renderMovie(movieData){
	console.log(movieData);
	var picture = $("#picture");
	picture.attr("src", movieData.picUrl); // Bättre än picture.src = movieData.picUrl
	var movieTitle = $("#movieTitle");
	movieTitle.text(movieData.title);
	var movieDescription = $("#movieDescription");
	movieDescription.text(movieData.description);
	var actorsHeadline = $("#actorsHeadline");
	actorsHeadline.text(movieData.actorsHeadline);
	var actorsList = $("#actorsList");
	for(let i in movieData.actors){
		actorsList.append("<li>"+movieData.actors[i]+"</li>");
	}
}

for(let i=1; i<=5; i++){
  let star = $("#star" + i);
  star.click(function(){changeStarRating(i);});
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