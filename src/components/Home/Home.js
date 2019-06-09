import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';

class Home extends Component{

    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1>Home</h1>
            </React.Fragment>
        );
    }
}

export default Home;