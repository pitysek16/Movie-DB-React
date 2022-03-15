import React from 'react';

class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            willWatch: false
        };
    }
    render() {
        const {movie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        const yearMovie = parseFloat(movie.release_date);
        
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>{movie.total_pages}</p>
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        <p className="mb-0">Year: {yearMovie}</p>
                        {this.state.willWatch ? (
                            <button type="button" className="btn btn-success" onClick={() => {
                                this.setState ({
                                    willWatch: false
                                });
                                removeMovieFromWillWatch(movie)}}>
                                     Remove Will Watch</button>
                            ) : (
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                this.setState ({
                                    willWatch: true
                                });
                                 addMovieToWillWatch(movie)}}>Add Will Watch</button>
                            )}
                        
                    </div>
                </div>
            </div>
        );
    };
};
export default MovieItem;