import React, { Component } from 'react'
import Movie from './Movie'
import '../styles/catalog.css';

class Catalog extends Component {

    constructor() {
        super()

        this.state = {
            rentedMovies: [],
            budget: 10 
        }
    }

    rentIt = id => {
        // this.props.method(id)
        let arr = [...this.state.rentedMovies]
        arr.push(id)
        this.setState({ rentedMovies: arr }, function () {
            this.setState({ budget: (this.state.budget - 3) })
        })

    }
    refound = id => {
        // this.props.method(id)
        let arr = [...this.state.rentedMovies]
        for (let i in arr) {
            if (arr[i].id === id) arr.splice(i, 0)
        }
        this.setState({ rentedMovies: arr }, function () {
            this.setState({ budget: (this.state.budget + 3) })
        })
    }

    rent = id => this.props.method(id)

    handleSearch = e => this.props.search(e.target.value)

    renderRented = (moviesArr) => {
        return (
            <div>
                <div>rents:</div>
                {moviesArr.filter(m => m.title.toLowerCase().search(this.props.searchVal) !== -1).map((m, i) => { return (<Movie key={i} movie={m} method={this.rent} rentIt={this.rentIt} refound={this.refound} budget={this.state.budget} />) })}
            </div>
        )
    }

    render() {
        let movies = this.props.movies
        let rentedMovies = this.props.rentedMovies
        console.log(this.props.searchVal)

        return (
            <div>
                <div id="homeCatalog">
                    <div id='searchBar'>
                        <input type="text" placeholder='Search' value={this.props.searchVal} onChange={this.handleSearch} />
                        <div>Budget: ${this.state.budget}</div>
                    </div>

                    <div id='container'>
                        {rentedMovies ? this.renderRented(rentedMovies) : null}
                    </div>
                    <div id='catalog'>
                        <p>Catalog:</p>
                        <div id='moviesContainer'>
                            {movies.filter(m => m.title.toLowerCase().search(this.props.searchVal) !== -1).map((m, i) => {
                                return (
                                    <Movie key={i} movie={m} method={this.rent} rentIt={this.rentIt} refound={this.refound} budget={this.state.budget} />
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