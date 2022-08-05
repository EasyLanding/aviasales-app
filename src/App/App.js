import React from 'react';
import CheckBoxTickets from '../CheckBoxTickets/CheckBoxTickets';
import './App.css';
import LogoTickets from '../LogoTickets/LogoTickets';
import Tikets from '../Tikets/Tikets';
import ButtonTikets from '../ButtonTickets/ButtonTickets';

function App ()
{
  return (
    <div className="App">
      <LogoTickets />
      <div className="conteiner-tikets-app">
        <CheckBoxTickets />
        <div>
          <div className='tikets-content-button'>
            <button className='checked'>Самый дешевый</button>
            <button className=''>Самый быстрый</button>
            <button className=''>Оптимальный</button>
          </div>
          <Tikets />
          <Tikets />
          <Tikets />
          <Tikets />
          <Tikets />
          <Tikets />
          <ButtonTikets />
        </div>
      </div>
    </div>
  );
}

export default App;
