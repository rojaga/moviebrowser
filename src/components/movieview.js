import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import noImage from "../no-image.jpeg";

const MovieView = () => {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e790c51b1d476dd3b8960ed4b93e7c38&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
        }, [id])

        function renderMovieDetails() {
            if(isLoading) {
                return <Hero text="Loading..." />
            }
            if(movieDetails) {
                const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
                const bdUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
                
                

                return (
                    <>
                        <Hero text={movieDetails.original_title} backdrop={bdUrl}/>
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-3">
                                {posterPath !== "https://image.tmdb.org/t/p/w500null" ? (
											<img
												src={posterPath}
												className="card-img-top"
												alt={movieDetails.original_title}
											/>
										) : (
											<img
												src={noImage}
												className="card-img-top "
												alt={movieDetails.original_title}
											/>
										)}
                                </div>
                                <div className="col-md-9">
                                    <div className="container">
                                        <div className="row">
                                            <h2>{movieDetails.original_title}</h2>
                                        </div>
                                        <div className="row">
                                            <p className="lead">{movieDetails.overview}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h4>Popularity</h4>
                                                <p className="">{movieDetails.popularity}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Runtime <i>(in minutes)</i></h4>
                                                <p className="">{movieDetails.runtime} minutes</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Release Date</h4>
                                                <p className="">{movieDetails.release_date}</p>
                                            </div>
                                        </div>    
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        }
    return renderMovieDetails (
    );
}

export default MovieView;