import React from 'react';
import '../../App.css';
import Teams from '../Teams/Teams';
import Header from './../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="App-header">
                <Teams/>
            </div>
        </div>
    );
};

export default Home;