const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

const statusMsg = document.querySelector('#statusMessage');
const loadingState = document.querySelector('#loadingState');
const errorState  = document.querySelector('#errorState');
const emptyState = document.querySelector('#emptyState');

const movieImg = document.querySelector('.movie-img');
const movieTitle = document.querySelector('.movie-title');
const movieYear = document.querySelector('.movie-year');
const movieRating = document.querySelector('.movie-rating');
const movieGenre = document.querySelector('.movie-genre');
const movieRuntime = document.querySelector('.movie-runtime');
const movieDescription = document.querySelector('.movie-description');

const API_KEY  = "67f741f4"

searchBtn.addEventListener('click', async ()=>{
    let searchInputValue = searchInput.value.trim()
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchInputValue}`
        );
        const data = await response.json();

        if(data.Response === "False"){
        emptyState.classList.remove('hidden');
        return;
    }

        emptyState.classList.add('hidden');
        
        movieImg.src = data.Poster
        movieTitle.textContent = `Title: ${data.Title}`;
        movieYear.textContent = `Year: ${data.Year}`;
        movieRating.textContent = `Rating: ${data.imdbRating}⭐`;
        movieGenre.textContent = `Genre: ${data.Genre}`;
        movieRuntime.textContent = `Runtime: ${data.Runtime}`;
        movieDescription.textContent = `Plot: ${data.Plot}`;

})

