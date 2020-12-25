import React, { Component } from 'react'
import Movie from './Movie'
import '../styles/catalog.css';

class Catalog extends Component {

    constructor() {
        super()
    }

    rent = id => this.props.method(id)

    renderRented = (moviesArr) => {
        return (
            <div>
                <div>rents:</div>
                {moviesArr.map((m, i) => {return (<Movie key={i} movie={m} method={this.rent} />)})}
            </div>
        )
    }

    render() {
        let method = this.props.method
        let movies = this.props.movies
        let rentedMovies = this.props.rentedMovies

        return (
            <div>
                <div id="homeCatalog">
                    <div id='searchBar'>
                        <input type="text" placeholder='Search' />
                        <div>Budget: $10.00</div>
                    </div>

                    <div id='container'>
                        {rentedMovies ? this.renderRented(rentedMovies) : null}
                    </div>
                    <div id='catalog'>
                        <p>Catalog:</p>
                        <div id='moviesContainer'>
                            {movies.map((m, i) => {
                                return (
                                    <Movie key={i} movie={m} method={this.rent} />
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog