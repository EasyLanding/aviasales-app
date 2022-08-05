import React from 'react';
import './LogoTickets.css';
import LogoImg from './Logo.png'

const LogoTickets = () =>
{
    return (
        <div className='LogoImgConteiner'>
            <img
                className='LogoImg'
                alt='LogoAviaSales'
                src={ LogoImg }
            />
        </div>
    )
}

export default LogoTickets