import React, { Component } from 'react';
import { render } from 'react-dom';
import img from '../static/manu.jpeg'
import '../css/app.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>Manogna Podishetty </h1>
                <img src={img} />
                <h3 >Introduction</h3>
                <p>  I'm a big foodie, I love cooking food, experiment with new dishes in my spare time and surprise my taste buds and decorating my home with DIYS's.Last time I remember I gifted my friend 21 hand made greeting cards as when she was turning 21!.
                I like to hangout with my friends and explore every place.
                I am an occasional reader like to read fiction and thrillers. 
                and finally listening to music. </p>
            </div>

        );
    }
}

