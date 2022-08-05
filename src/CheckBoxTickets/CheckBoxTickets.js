import React from 'react';
import './CheckBoxTickets.css';


const CheckBoxTickets = () =>
{
    return (
        <div className='checkBoxTickets'>
            <h3 className='tikets-header'>Колличество пересадок</h3>
            <div class="checkbox">
                <input class="tikets-checkbox" type="checkbox" id="all" name="all" value="Все" />
                <label for="all">Все</label>
            </div>

            <div class="checkbox">
                <input class="tikets-checkbox" type="checkbox" id="avia" name="avia" value="Без пересадок" />
                <label for="avia">Без пересадок</label>
            </div>

            <div class="checkbox">
                <input class="tikets-checkbox" type="checkbox" id="avia-1" name="avia-1" value="1 пересадка" />
                <label for="avia-1">1 пересадка</label>
            </div>

            <div class="checkbox">
                <input class="tikets-checkbox" type="checkbox" id="avia-2" name="avia-2" value="2 пересадки" />
                <label for="avia-2">2 пересадки</label>
            </div>

            <div class="checkbox">
                <input class="tikets-checkbox" type="checkbox" id="avia-3" name="avia-3" value="3 пересадки" />
                <label for="avia-3">3 пересадки</label>
            </div>

        </div>
    )
}

export default CheckBoxTickets