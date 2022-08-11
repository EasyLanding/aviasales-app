import React, { useEffect, useState } from 'react';
import './Tikets.css';
import { format } from 'date-fns'


const Tikets = ({ tiketsInfo, stopTick, sortTickets, filterTickets }) =>
{
    let keyProp = 100
    let keyProp1 = 1000
    const [fiveTick, setFiveTick] = useState([])
    useEffect(() =>
    {
        if (stopTick === true)
        {
            setFiveTick(tiketsInfo.slice(0, 1))
        }
    }, [stopTick, tiketsInfo])

    let fiveTickets = fiveTick.map((el) =>
    {

        return sortTickets(filterTickets(el.slice(0, 6)))
    })

    function getTimeFromMins (mins)
    {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'ч. ' + minutes + 'м.';
    }

    function roadStartEnd (roadStart, roadTime)
    {
        let date = new Date(roadStart)
        let hours = date
        let minutes = date
        let roadTimeHours = new Date(
            format(date, 'HH') + Math.floor(roadTime / 60)
        )

        let roadTimeMinutes = new Date(
            date.setMinutes(date.getMinutes() + roadTime)
        ).getMinutes()

        return (
            format(hours, 'HH') + ':' + format(minutes, 'mm') + ' - ' + format(roadTimeHours, 'HH') + ':' + roadTimeMinutes
        )
    }
    return (
        <div>
            {
                fiveTickets.map((el) =>
                {
                    return el.map((el) => (
                        <div className='tikets' id='tikets-id' key={ keyProp++ }>
                            <div className='tikets-price'>
                                <p>{
                                    el.price.toString().slice(0, 2) + ' ' + el.price.toString().slice(2, el.price.length)
                                } P</p>
                                <img className='tikets-price-img' alt='AviaSales' src={ `//pics.avs.io/99/36/${el.carrier}.png` } />
                            </div>


                            {
                                el.segments.map((el) => (
                                    <div key={ keyProp1++ }>
                                        <div className='tikets-textInfo-conteiner1'>
                                            <div className='tickets-textInfo-block'>
                                                <h4 className='tikets-textInfo-header'>
                                                    { el.origin } – { el.destination }
                                                </h4>
                                                <p className='tikets-textInfo-text'>
                                                    {
                                                        roadStartEnd(el.date, el.duration)
                                                    }
                                                </p>
                                            </div>
                                            <div className='tickets-textInfo-block'><h4 className='tikets-textInfo-header'>В пути</h4>
                                                <p className='tikets-textInfo-text'>
                                                    {
                                                        getTimeFromMins(el.duration)
                                                    }
                                                </p>
                                            </div>
                                            <div className='tickets-textInfo-block'><h4 className='tikets-textInfo-header'>Кол-во пересадок: { el.stops.length }</h4><p className='tikets-textInfo-text'>{ el.stops.join(', ') }</p></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                    )
                })
            }
        </div>
    )
}

export default Tikets;