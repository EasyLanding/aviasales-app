import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ticketsSorting } from '../../redux/tickets'

import buttonStyle from './button.module.css'

const Button = () =>
{
    const dispatch = useDispatch()
    const { sorts } = useSelector((store) => store['tickets'])

    return (
        <div className={ buttonStyle.articleButtons }>
            { sorts.map((item) => (
                <button
                    key={ item.name }
                    name={ item.name }
                    className={ `${buttonStyle.buttons} ${item.active && buttonStyle.activeBtn}` }
                    onClick={ (e) => dispatch(ticketsSorting(e.target['name'])) }
                >
                    { item.name }
                </button>
            ),
            )
            }
        </div>
    )
}

export default Button