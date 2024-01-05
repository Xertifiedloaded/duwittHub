import React from 'react'
import mouse from '../assets/images/mouse.svg'
import { HashLink as Link } from 'react-router-hash-link'
export default function Mouse() {
    return (
        <>
            <Link to='#faq' smooth>
                <img style={{ width: '84px' }} src={mouse} alt="" />
            </Link>
        </>
    )
}
