import React, { Component } from 'react';
import HotelCard from '../components/hotel-card/HotelCard';

class App extends Component {
    render() {
        return (
            <div>
                Welcome to Holyday Pirates

                <HotelCard />
            </div>
        )
    }
}
export default App;