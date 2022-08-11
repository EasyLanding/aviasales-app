import React from 'react';
import './CheckBoxTickets.css';


const CheckBoxTickets = ({ filter, withoutFilterHandler }) =>
{

    return (
        <div className='checkBoxTickets' id="checkBoxTickets-id">
            <h3 className='tikets-header'>Колличество пересадок</h3>
            <div className="checkbox">
                <input
                    className="tikets-checkbox"
                    type="checkbox"
                    id="all"
                    name="all"
                    value="Все"
                    onChange={ () => withoutFilterHandler('all') }
                    checked={ filter.all }
                />
                <label htmlFor="all">Все</label>
            </div>

            <div className="checkbox">
                <input
                    className="tikets-checkbox"
                    type="checkbox" id="avia"
                    name="avia"
                    value="Без пересадок"
                    onChange={ () => withoutFilterHandler('without') }
                    checked={ filter.without }
                />
                <label htmlFor="avia">Без пересадок</label>
            </div>

            <div className="checkbox">
                <input
                    className="tikets-checkbox"
                    type="checkbox" id="avia-1"
                    name="avia-1"
                    value="1 пересадка"
                    onChange={ () => withoutFilterHandler('one') }
                    checked={ filter.one }
                />
                <label htmlFor="avia-1">1 пересадка</label>
            </div>

            <div className="checkbox">
                <input
                    className="tikets-checkbox"
                    type="checkbox"
                    id="avia-2"
                    name="avia-2"
                    value="2 пересадки"
                    onChange={ () => withoutFilterHandler('two') }
                    checked={ filter.two }
                />
                <label htmlFor="avia-2">2 пересадки</label>
            </div>

            <div className="checkbox">
                <input
                    className="tikets-checkbox"
                    type="checkbox"
                    id="avia-3"
                    name="avia-3"
                    value="3 пересадки"
                    onChange={ () => withoutFilterHandler('three') }
                    checked={ filter.three }
                />
                <label htmlFor="avia-3">3 пересадки</label>
            </div>

        </div>
    )
}

export default CheckBoxTickets