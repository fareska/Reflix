import React, {Component} from 'react'

class MovieDetail extends Component {

    render(){

        let movieId = this.props.match.match.params.movieID
        let movie = this.props.movies.find(m=> m.id == movieId)
        
        return(
            <div>
                <div id='movieDetailComponent'></div>
                <header>{movie.title}  {movie.year}</header>
                <img src={movie.img} alt=""/>
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail