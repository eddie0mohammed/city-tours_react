import React, { Component } from 'react';

import './tourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../../tourData';

import Navbar from '../Navbar/Navbar';

class TourList extends Component{

    state = {
        tours: tourData
    }
    removeTour = id => {
        const tours = this.state.tours;
        const updatedTours = tours.filter(tour => tour.id !== id);
        this.setState({tours: updatedTours});


        console.log(id);
    }

    render(){

        const {tours} = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <section className="tourList">
                    {tours.map(tour => (<Tour key={Math.random()} tour={tour} removeTour={this.removeTour}/>))}
                </section>
            </React.Fragment>
        );
    }
}

export default TourList;