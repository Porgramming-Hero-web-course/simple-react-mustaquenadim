import React from 'react';
import './Details.css';

const Details = (props) => {
    const { name, position, age, country, club, image, value } = props.players;
    console.log(props);

    return (
        <div>
            <h1>Our Castle</h1>
            <div className='card'>
                <img src={image} className='card-img-top' alt='{name}' />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>
                        <small>{position}</small>
                    </p>
                    <p className='card-text'>
                        <small>{age}</small>
                    </p>
                    <p className='card-text'>
                        <small>{country}</small>
                    </p>
                    <p className='card-text'>
                        <small>{club}</small>
                    </p>
                    <p className='card-text'>
                        <small>{value}</small>
                    </p>
                    <button
                        onClick={() => props.handler(props.player)}
                        className='btn btn-primary'
                    >
                        Select for Shortlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
