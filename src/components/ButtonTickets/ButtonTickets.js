import React from 'react';
import './ButtonTickets.css';
import { incrementTicketsItem } from '../../redux/tickets'
import { useDispatch } from 'react-redux'

const ButtonTikets = () =>
{
    const dispatch = useDispatch()
    return (
        <button
            className="tikets-buttons-more"
            onClick={ () => dispatch(incrementTicketsItem()) }
        >Показать еще 5 билетов!</button>
    )
}
export default ButtonTikets