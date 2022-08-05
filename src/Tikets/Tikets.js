import React from 'react';
import './Tikets.css';
import S7Logo from './S7Logo.png'

const Tikets = () =>
{
    return (
        <div className='tikets'>
            <div className='tikets-price'>
                <p>13 200 P</p>
                <img className='tikets-price-img' alt='AviaSales' src={ S7Logo } />
            </div>
            <div>
                <div className='tikets-textInfo-conteiner'>
                    <div><h4 className='tikets-textInfo-header'>MOW – HKT</h4><p className='tikets-textInfo-text'>10:45 – 08:00</p></div>
                    <div><h4 className='tikets-textInfo-header'>В пути</h4><p className='tikets-textInfo-text'>21ч 15м</p></div>
                    <div><h4 className='tikets-textInfo-header'>2 пересадки</h4><p className='tikets-textInfo-text'>HKG, JNB</p></div>
                </div>
                <div className='tikets-textInfo-conteiner1'>
                    <div><h4 className='tikets-textInfo-header'>MOW – HKT</h4><p className='tikets-textInfo-text'>11:20 – 00:50</p></div>
                    <div><h4 className='tikets-textInfo-header'>В пути</h4><p className='tikets-textInfo-text'>13ч</p></div>
                    <div><h4 className='tikets-textInfo-header'>1 пересадка</h4><p className='tikets-textInfo-text'>HKG</p></div>
                </div>
            </div>
        </div>
    )
}

export default Tikets;