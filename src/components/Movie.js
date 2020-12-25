import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movie.css';

class Movie extends Component {

    rent = () => {this.props.method(this.props.movie.id)}

    render() {
        let movie = this.props.movie
        console.log(this.props, 'props')
        console.log(this.props.method, 'method')
        
        return (
                <div id='movieComponent'>
                        <img src={movie.img} alt="" />
                        <p onClick={this.rent}> {movie.isRented ? '-' : '+'} </p>
                        <Link to={`/movies/${movie.id}`}> <p>{movie.title}</p></Link>
                </div>
        )
    }
}
export default Movie