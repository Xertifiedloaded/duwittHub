import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export const UserContentApi = createContext()
export default function ContextApi({ children }) {
    const location = useLocation()
    const year = new Date()
    const currentYear = year.getFullYear()
    const date = year.getMonth()
    useEffect(() => {
        console.log(date)
    })

    const value = {

        currentYear,
        location

    }

    return (
        <UserContentApi.Provider value={value}>
            {children}
        </UserContentApi.Provider>
    )
}


