window.onload = () => {
  fetchMovies();
};

function fetchMovies() {
  fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=f81980ff410e46f422d64ddf3a56dddd&with_networks=213"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addMovies(data);
    });
}

// Add movies to the front end
function addMovies(movies) {
  // Add img element to original__movies element
  var moviesEl = document.querySelector(".original__movies");
  for (var movie of movies.results) {
    var image = `<img src="https://image.tmdb.org/t/p/original/${movie.poster_path}"></img>`;
    moviesEl.innerHTML += image;
  }
}
