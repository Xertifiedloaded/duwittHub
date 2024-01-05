import React from 'react'
import BackArrow from '../assets/images/backarrow.svg'
import { Link } from 'react-router-dom'
export default function BackComponent() {
    return (
        <Link style={{ display: 'flex', gap: '10px' }} to={'/events'}  >
            <img src={BackArrow} alt="" />
            <span>Go Back to  Events</span>
        </Link>
    )
}
