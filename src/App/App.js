import { useCallback, useEffect, useState } from 'react';
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
  const [filter, setFilter] = useState({ all: false, without: false, one: false, two: false, three: false })

  const [filterSort, setFilterSort] = useState({ cheap: true, fast: false, optimization: false })

  const sortTickets = useCallback(
    (tickets) =>
    {
      const sTick = [...tickets]
      if (filterSort.cheap)
      {
        return sTick.sort((a, b) => a.price - b.price)
      }
      if (filterSort.fast)
      {

        return sTick.sort(
          (a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
        )
      }
      if (filterSort.optimization)
      {
        sTick.sort((a, b) => (a.price - b.price) / a.price.length)
      }
      return sTick
    }, [filterSort]
  )

  const filterTickets = useCallback(
    (tickets) =>
    {
      const flag = true
      return tickets.filter((cur) =>
      {
        if (filter.all)
        {
          return cur
        }
        if (filter.without && cur.segments[0].stops.length === 0 && cur.segments[1].stops.length === 0)
        {
          return flag
        }
        if (filter.one && cur.segments[0].stops.length === 1 && cur.segments[1].stops.length === 1)
        {
          return flag
        }
        if (filter.two && cur.segments[0].stops.length === 2 && cur.segments[1].stops.length === 2)
        {
          return flag
        }
        if (filter.three && cur.segments[0].stops.length === 3 && cur.segments[1].stops.length === 3)
        {
          return flag
        }
        return !flag
      })
    }, [filter]
  )

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

  const sortHandler = useCallback(
    (button) =>
    {
      if (filterSort[button]) return


      setFilterSort({ cheap: !filterSort['cheap'], fast: !filterSort['fast'], optimization: !filterSort['optimization'] })

    },
    [filterSort]
  )
  const withoutFilterHandler = () =>
  {
    if (!filter.all)
    {
      setFilter({ all: true, without: true, one: true, two: true, three: true })
    } else
    {
      setFilter({ all: false, without: false, one: false, two: false, three: false })
    }
  }


  return (
    <div className="App">
      <LogoTickets />
      <div className="conteiner-tikets-app" id="conteiner-tikets-app-id">
        <CheckBoxTickets
          filter={ filter }
          setFilter={ setFilter }
          withoutFilterHandler={ withoutFilterHandler }
        />
        <div>
          <div className='tikets-content-button' id="tikets-content-button-id">
            <button className={ `${filterSort.cheap ? 'checked' : ''}` }
              onClick={ () => sortHandler('cheap') }
            >Самый дешевый</button>
            <button className={ `${filterSort.fast ? 'checked' : ''}` }
              onClick={ () => sortHandler('fast') }
            >Самый быстрый</button>
            <button className={ `${filterSort.optimization ? 'checked' : ''}` }
              onClick={ () => sortHandler('optimization') }
            >Оптимальный</button>
          </div>
          <Tikets
            filterTickets={ filterTickets }
            tiketsInfo={ tick }
            stopTick={ stop }
            sortTickets={ sortTickets }
          />
          <ButtonTikets />
        </div>
      </div>
    </div>
  );
}

export default App;
