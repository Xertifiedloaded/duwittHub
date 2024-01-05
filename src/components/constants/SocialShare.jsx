import React from 'react'
import Instagram from '../assets/images/instagram.svg'
import X from '../assets/images/xsvg.svg'
import message from '../assets/images/sms.svg'
import { useLocation } from 'react-router-dom'
export default function SocialShare() {
    const location = useLocation()
    return (
        <>
            <div >
                {location.pathname === '/event/register' ? <p style={{ fontSize: '24px', fontWeight: "600", margin: '10px 0' }}>Share this event:</p> : null}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img style={{ width: "22px" }} src={X} alt="" />
                    <img style={{ width: "22px" }} src={Instagram} alt="" />
                    <img style={{ width: "22px" }} src={message} alt="" />
                </div>
            </div>
        </>
    )
}
