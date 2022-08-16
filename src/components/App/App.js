import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchData } from '../../redux/tickets'
import CheckBoxTickets from '../CheckBoxTickets/CheckBoxTickets';
import './App.css';
import LogoTickets from '../LogoTickets/LogoTickets';
import Tikets from '../Tikets/Tikets';
import ButtonTikets from '../ButtonTickets/ButtonTickets';
import Button from '../button/button';
import Loader from '../loader/loader'
import Utils from '../../utils'

function App ()
{
  // const [searchId, setSearchId] = useState()
  // const [tick, setTick] = useState([])
  // const [stop, setStop] = useState(false)
  // const [filter, setFilter] = useState({ all: true, without: true, one: true, two: true, three: true })
  // let [flagAddTickets, setFlagAddTickets] = useState(false)

  // const [filterSort, setFilterSort] = useState({ cheap: true, fast: false, optimization: false })

  // const sortTickets = useCallback(
  //   (tickets) =>
  //   {
  //     const sTick = [...tickets]
  //     if (filterSort.cheap)
  //     {
  //       return sTick.sort((a, b) => a.price - b.price)
  //     }
  //     if (filterSort.fast)
  //     {

  //       return sTick.sort(
  //         (a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
  //       )
  //     }
  //     if (filterSort.optimization)
  //     {
  //       return sTick.sort((a, b) => (a.price + b.price) / tickets.length)
  //     }
  //     return sTick
  //   }, [filterSort]
  // )

  // const filterTickets = useCallback(
  //   (tickets) =>
  //   {
  //     const flag = true
  //     return tickets.filter((cur) =>
  //     {
  //       if (filter.all)
  //       {
  //         return cur
  //       }
  //       if (filter.without && (cur.segments[0].stops.length === 0 || cur.segments[1].stops.length === 0))
  //       {
  //         return flag
  //       }
  //       if (filter.one && (cur.segments[0].stops.length === 1 || cur.segments[1].stops.length === 1))
  //       {
  //         return flag
  //       }
  //       if (filter.two && (cur.segments[0].stops.length === 2 || cur.segments[1].stops.length === 2))
  //       {
  //         return flag
  //       }
  //       if (filter.three && (cur.segments[0].stops.length === 3 || cur.segments[1].stops.length === 3))
  //       {
  //         return flag
  //       }
  //       return !flag
  //     })
  //   }, [filter]
  // )

  // useEffect(() =>
  // {
  //   fetch('https://front-test.dev.aviasales.ru/search')
  //     .then((res) =>
  //     {
  //       return res.json()
  //     })
  //     .then((res) =>
  //     {

  //       setSearchId(res.searchId)

  //     })
  //     .catch((e) =>
  //     {
  //       console.log(e)
  //     })
  // }, [])


  // useEffect(() =>
  // {
  //   if (searchId && stop === false)
  //   {
  //     function ticketsSubscribe ()
  //     {
  //       fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
  //         .then((res) =>
  //         {
  //           if (res.status === 500)
  //           {
  //             ticketsSubscribe()
  //             throw Error('Упс, статус запроса 500, похоже на какую-то ошибку')
  //           } else
  //           {
  //             return res.json()
  //           }
  //         })
  //         .then((tikets) =>
  //         {
  //           if (tikets.stop)
  //           {
  //             setStop(true)
  //           }
  //           setTick([...tick, tikets.tickets])
  //         }).catch((e) =>
  //         {
  //           throw Error(e, 'Упс...ошибка на сервере или ошибка запроса')
  //         })
  //     }
  //     ticketsSubscribe()
  //   }
  // }, [searchId, tick, stop])

  // const sortHandler = useCallback(
  //   (button) =>
  //   {
  //     if (filterSort[button]) return

  //     if (button === 'cheap')
  //     {
  //       setFilterSort({ cheap: !filterSort['cheap'] })
  //     }
  //     if (button === 'fast')
  //     {
  //       setFilterSort({ fast: !filterSort['fast'] })
  //     }
  //     if (button === 'optimization')
  //     {
  //       setFilterSort({ optimization: !filterSort['optimization'] })
  //     }

  //   },
  //   [filterSort]
  // )
  // const withoutFilterHandler = (temp) =>
  // {
  //   let tempFilter = { ...filter }
  //   tempFilter[temp] = !tempFilter[temp]
  //   if (temp === 'all')
  //   {
  //     tempFilter = Object.fromEntries(
  //       Object.keys(tempFilter).map((el) =>
  //       {
  //         return [el, tempFilter[temp]]
  //       })
  //     )
  //   } else
  //   {
  //     if (Object.keys(tempFilter).some((key) => tempFilter[key] === false))
  //     {
  //       tempFilter['all'] = false
  //     }
  //     if (Object.keys(tempFilter).every((key) =>
  //     {
  //       if (key === 'all') return true
  //       return tempFilter[key] === true
  //     }))
  //     {
  //       tempFilter['all'] = true
  //     }
  //   }
  //   setFilter({ ...tempFilter })
  // }

  const dispatch = useDispatch()
  const { isLoading, entity, transfers, activeSort, slices } = useSelector((state) => state['tickets'])

  useEffect(() =>
  {
    if (entity.length === 0) dispatch(fetchData())
  }, [entity.length, dispatch])

  const ticketsToRender = Utils.sortFunctions(transfers, entity, activeSort)

  return (
    <div className="App">
      <LogoTickets />
      <div className="conteiner-tikets-app" id="conteiner-tikets-app-id">
        <CheckBoxTickets

        />
        <div>
          <Button />
          { !isLoading ?

            <Tikets
              tiketsInfo={ ticketsToRender }
              slices={ slices }
            />
            : <Loader />
          }
          <div id='ButtonTikets'>
            <ButtonTikets
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
