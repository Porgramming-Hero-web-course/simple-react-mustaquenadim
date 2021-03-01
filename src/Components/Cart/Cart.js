import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const selectedPlayer = props.selectedPlayer;
    const total = selectedPlayer.reduce((value, curr) => value + curr.value, 0);
    return (
        <div>
            <h4 className='text-center'>Shortlisted Player</h4>
            <h5>Selected Player: {selectedPlayer.length}</h5>
            <hr></hr>
            {
                selectedPlayer.map((player) => <h6 key={player.id}>{player.name} - €{player.value}M</h6>)
            }
            <hr></hr>
            <h5>Total Transfer Value: €{total}M</h5>
        </div>
    );
};

export default Cart;