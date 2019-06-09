import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';

class About extends Component{

    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1>About</h1>
            </React.Fragment>
        );
    }
}

export default About;