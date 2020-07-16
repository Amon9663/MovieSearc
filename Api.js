const API_KEY = "5f6842f2"

export const searchMovie = async (search,page) =>{
const url =`http://www.omdbapi.com/?s=${search}&type=movie&apikey=${API_KEY}&page=${page}`;

const response = await fetch(url);
const result = await response.json();
console.log(result);

return {
    movies:result['Search']
   //total: +result['totalResults'],
};
};

export const getDetails = async imdbId =>{
    const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${API_KEY}`
    );
    const result = await response.json();
    return result;
};