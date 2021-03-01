import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css';

const Players = (props) => {
    const { name, position, age, country, club, image, value } = props.players;
    return (
        <div className="players">
            <div className='card custom-card'>
                <img src={image} className='card-img-top img' alt={name} />
                <div className='card-body'>
                    <h5 className='card-title'>Name: {name}</h5>
                    <p className='card-text'>Position: {position}</p>
                    <p className='card-text'>Age: {age}</p>
                    <p className='card-text'>Country: {country}</p>
                    <p className='card-text'>Club: {club}</p>
                    <p className='card-text'>Value: €{value}M</p>
                    <button
                        onClick={() => props.addToCart(props.players)}
                        className='btn btn-primary'
                    >
                        <FontAwesomeIcon icon={faPlus}/>  Select for Shortlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Players;
