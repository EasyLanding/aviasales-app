import React from 'react';
import './CheckBoxTickets.css';


const CheckBoxTickets = () =>
{
    return (
        <div className='checkBoxTickets' id="checkBoxTickets-id">
            <h3 className='tikets-header'>Колличество пересадок</h3>
            <div className="checkbox">
                <input className="tikets-checkbox" type="checkbox" id="all" name="all" value="Все" />
                <label htmlFor="all">Все</label>
            </div>

            <div className="checkbox">
                <input className="tikets-checkbox" type="checkbox" id="avia" name="avia" value="Без пересадок" />
                <label htmlFor="avia">Без пересадок</label>
            </div>

            <div className="checkbox">
                <input className="tikets-checkbox" type="checkbox" id="avia-1" name="avia-1" value="1 пересадка" />
                <label htmlFor="avia-1">1 пересадка</label>
            </div>

            <div className="checkbox">
                <input className="tikets-checkbox" type="checkbox" id="avia-2" name="avia-2" value="2 пересадки" />
                <label htmlFor="avia-2">2 пересадки</label>
            </div>

            <div className="checkbox">
                <input className="tikets-checkbox" type="checkbox" id="avia-3" name="avia-3" value="3 пересадки" />
                <label htmlFor="avia-3">3 пересадки</label>
            </div>

        </div>
    )
}

export default CheckBoxTickets