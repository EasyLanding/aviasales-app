import './Tikets.css';
import { format } from 'date-fns'
import Utils from '../../utils'


const Tikets = ({ tiketsInfo, slices }) =>
{
    let keyProp = 100
    let keyProp1 = 1000

    let fiveTickets = tiketsInfo.slice(0, slices)


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
                    return (
                        <div className='tikets' id='tikets-id' key={ keyProp++ }>
                            <div className='tikets-price'>
                                <p>{
                                    Utils.priceEditor(el['price'])
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
                                                    { Utils.changeStopsDeclension(el['stops']) }
                                                </p>
                                            </div>
                                            <div className='tickets-textInfo-block'><h4 className='tikets-textInfo-header'>Кол-во пересадок: { el.stops.length }</h4><p className='tikets-textInfo-text'>{ el.stops.join(', ') }</p></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tikets;