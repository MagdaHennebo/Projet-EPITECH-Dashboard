import React, { Component } from 'react';
import "./Movies.css"
import Paper from "@material-ui/core/Paper";
import $ from 'jquery';
import MovieRow from "./MovieRow.js"

export class Movies extends Component {
    constructor(props){
        super(props)
        this.state={}
        
            
        /* var movieRows = [];
        movies.forEach((movie)=> {
            console.log(movie.title)
            const movieRow = <MovieRow movie ={movie}/>
            movieRows.push(movieRow)
        })

        this.state = {rows:movieRows}
 */
        this.performSearch("woman")
    }

    performSearch(searchTerm) {
        console.log("Perform search using moviedb")
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=d5bb6eae4ad74fbf335612728e7f4c19&language=en-US&page=1&include_adult=false&query=" + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")

                const results = searchResults.results

                var movieRows = []

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

                    const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow)
                })

            this.setState({rows:movieRows})
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }

    searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }

    render() {
        return (
            <Paper className="movie">
                <table style = {{
                    backgroundColor : '#000',
                    display : 'block',
                    color : '#fff',
                    fontSize : 24
                }}>
                    <tbody>
                        <h3><a className="Lien" href="https://www.themoviedb.org/">MovieDB</a></h3>
                    </tbody>
                </table>

                <input onChange={this.searchChangeHandler.bind(this)} placeholder="Search"/>

                {this.state.rows}


            </Paper>
        )
    }
}

export default Movies;