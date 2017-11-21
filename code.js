function renderMovie(movie){
	
	var picture = document.getElementById("picture");
	picture.src = movie.picUrl;
	var movieTitle = document.getElementById("movieTitle");
	movieTitle.innerText = movie.title;
	var movieDescription = document.getElementById("movieDescription");
	movieDescription.innerText = movie.description;
	var actorsHeadline = document.getElementById("actorsHeadline");
	actorsHeadline.innerText = movie.actorsHeadline;
	var actorsList = document.getElementById("actorsList");
	for(let i in movie.actors){
		actorsList.innerHTML+="<li>"+movie.actors[i]+"</li>";
	}
}

renderMovie(movieData);