import { useEffect, useState } from 'react';
import CheckBoxTickets from '../CheckBoxTickets/CheckBoxTickets';
import './App.css';
import LogoTickets from '../LogoTickets/LogoTickets';
import Tikets from '../Tikets/Tikets';
import ButtonTikets from '../ButtonTickets/ButtonTickets';


function App ()
{
  const [searchId, setSearchId] = useState()
  const [tick, setTick] = useState([])
  const [stop, setStop] = useState(false)

  useEffect(() =>
  {
    fetch('https://front-test.dev.aviasales.ru/search')
      .then((res) =>
      {
        return res.json()
      })
      .then((res) =>
      {

        setSearchId(res.searchId)

      })
      .catch((e) =>
      {
        console.log(e)
      })
  }, [])


  useEffect(() =>
  {
    if (searchId && stop === false)
    {
      function ticketsSubscribe ()
      {
        fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
          .then((res) =>
          {
            if (res.status === 500)
            {
              ticketsSubscribe()
              throw Error('Упс, статус запроса 500, похоже на какую-то ошибку')
            } else
            {
              return res.json()
            }
          })
          .then((tikets) =>
          {
            if (tikets.stop)
            {
              setStop(true)
            }
            setTick([...tick, tikets.tickets])
          }).catch((e) =>
          {
            throw Error(e, 'Упс...ошибка на сервере или ошибка запроса')
          })
      }
      ticketsSubscribe()
    }
  }, [searchId, tick, stop])

  return (
    <div className="App">
      <LogoTickets />
      <div className="conteiner-tikets-app" id="conteiner-tikets-app-id">
        <CheckBoxTickets />
        <div>
          <div className='tikets-content-button' id="tikets-content-button-id">
            <button className='checked'>Самый дешевый</button>
            <button className=''>Самый быстрый</button>
            <button className=''>Оптимальный</button>
          </div>
          <Tikets
            tiketsInfo={ tick }
            stopTick={ stop }
          />
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
