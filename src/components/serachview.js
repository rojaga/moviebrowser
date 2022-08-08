import Hero from "./hero";
import { Link } from "react-router-dom";
import noImage from "../no-image.jpeg";


const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const detailUrl = `/movies/${movie.id}`;

    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card movie-card">
                {posterUrl !== "https://image.tmdb.org/t/p/w500null" ? (
                    <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                ) : (
                    <img src={noImage} className="card-img-top " alt={movie.original_title} />
                )} 
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary txt-sm">Show details</Link>
                </div>
            </div>
        </div>
    )
}
const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    });

    return (
        <>
            {keyword ? <Hero text={title} /> : <Hero text="Search for a movie" />}

            {resultsHtml && keyword ? (
                <div className="container">
                    <div className="row">{resultsHtml}</div>
                    
                </div>
            ) : (
                <></>
            )}

            {resultsHtml.length === 0 && keyword ? (
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <p className="lead text-center mt-5 fs-1">
                                No results found for: <strong>{keyword}</strong>.
                            </p>
                            <p className="lead text-center fs-1">Please try again.</p>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default SearchView;