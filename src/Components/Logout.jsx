import React from 'react'
import {useHistory} from 'react-router-dom'
import loginContext from '../Context/loginContext'
import {useContext} from 'react'

export default function () {
    const context=useContext(loginContext)
    const history=useHistory()
    context.sign()
    history.push('/')
    return (
        <div>
            
        </div>
    )
}
