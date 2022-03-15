import React from 'react';
//import { MoviesData } from '../moviesData';
import MovieItem from './movieItem';
import {API_URL, API_KEY_3} from '../api';
import MovieTabs from './movieTabs';
import PagePagination from './pagination';

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
            page: 1,
            total_pages: 1
        }
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState ({
                movies: data.results,
                total_pages: data.total_pages
            });
        });
    }
    

    componentDidMount() {
        this.getMovies();
    }

    addMovieToWillWatch = movie => {

        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

        this.setState ({
            moviesWillWatch: updateMoviesWillWatch
        });
    };

    removeMovieFromWillWatch = movie => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item)
        {
            return item.id !== movie.id
        });
        this.setState ({
            moviesWillWatch: updateMoviesWillWatch
        });
    };

    updateSortBy = (value) => {
        this.setState ({
            sort_by: value
        });
    }
    updateByPage = (value_page) => {
        this.setState ({
            page: value_page
        });
    }

    componentDidUpdate(prevState) {
        if (prevState.sort_by !== this.state.sort_by) {
            this.getMovies();
        }
    }
    

    nextPage = () => {
        let pageNumber = this.state.page;
        pageNumber += 1;
        if (this.state.movies && pageNumber < this.state.total_pages){
            this.setState ({
                page: pageNumber
            })
        }
    }
    previousPage = () => {
        let pageNumber = this.state.page;
        pageNumber -= 1;
        if (this.state.movies && pageNumber !== 1){
            this.setState ({
                page: pageNumber
            })
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        
                                <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy}/>
                                <PagePagination previousPage={this.previousPage} nextPage={this.nextPage} />
 
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4"  key={movie.id}>
                                        <MovieItem movie={movie} addMovieToWillWatch={this.addMovieToWillWatch} removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <div  className="position-fixed">
                            <p className="mt-4"><b>Will Watch:</b> {this.state.moviesWillWatch.length}</p>
                            <p className="mt-2"><b>Current page:</b>  {this.state.page}</p>
                            <p className="mt-2"><b>Total pages:</b>  {this.state.total_pages}</p>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

