import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movie.css';

class Movie extends Component {

    rent = () => this.props.budget>2 ? this.props.method(this.props.movie.id) : alert(`you don't have enough money in your budget` )

    refound = () => {this.props.refound(this.props.movie.id)}
    
    rentIt = () => {this.props.rentIt(this.props.movie.id)}

    
    render() {
        let movie = this.props.movie
        
        return (
                <div id='movieComponent'>
                        <img src={movie.img} alt="" />
                        <p onClick={this.rent}> {movie.isRented ? <span onClick={this.refound}>-</span>  : <span onClick={this.rentIt} >+</span> } </p>
                        <Link to={`/movies/${movie.id}`}> <p>{movie.title}</p></Link>
                </div>
        )
    }
}
export default Movie