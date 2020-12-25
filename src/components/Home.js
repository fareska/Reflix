import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            users: {
                user1: { backgroundColor: 'Blue' },
                user2: { backgroundColor: 'Green' },
                user3: { backgroundColor: 'Yellow' },
                user4: { backgroundColor: 'Red' },
            },
        }
    }

    render() {
        return (
            <div>
                <div id="homeComponent">
                    <header>WHO'S WATCHING?</header>
                    <div id='users'>
                        <Link to='/Catalog' >
                            <div className='user' style={this.state.users.user1}><p>user1</p></div>
                        </Link>
                        <Link to='/Catalog' >
                            <div className='user' style={this.state.users.user2} ><p>user2</p></div>
                        </Link>
                        <Link to='/Catalog' >
                            <div className='user' style={this.state.users.user3} ><p>user3</p></div>
                        </Link>
                        <Link to='/Catalog' >
                            <div className='user' style={this.state.users.user4} ><p>user4</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home