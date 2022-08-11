import React from 'react';
import './ButtonTickets.css';

const ButtonTikets = ({ flagAddTickets, stFlagAddTickets }) =>
{
    return (
        <button
            className="tikets-buttons-more"
            onClick={ () => stFlagAddTickets(flagAddTickets = true) }
        >Показать еще 5 билетов!</button>
    )
}
export default ButtonTikets