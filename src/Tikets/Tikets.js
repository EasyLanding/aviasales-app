import React, { useEffect, useState } from 'react';
import './Tikets.css';


const Tikets = ({ tiketsInfo, stopTick }) =>
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
        return el.slice(0, 6)
    })

    function getTimeFromMins (mins)
    {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'ч. ' + minutes + 'м.';
    }
    console.log(fiveTickets)
    return (
        <div>
            {
                fiveTickets.map((el) =>
                {
                    return el.map((el) => (
                        <div className='tikets' key={ keyProp++ }>
                            <div className='tikets-price'>
                                <p>{ el.price } P</p>
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
                                                        new Date(el.date).getHours() + ':' + new Date(el.date).getMinutes()
                                                    }
                                                    -
                                                    {
                                                        new Date(new Date(el.date).getHours() + el.duration).getHours() + ':' + new Date(new Date(el.date) + el.duration).getMinutes()

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