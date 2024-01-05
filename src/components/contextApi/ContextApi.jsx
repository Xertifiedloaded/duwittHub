import React, { createContext, useEffect, useState } from 'react'
import { BlogPageData } from '../constants/BlogPost'
export const UserContentApi = createContext()

export default function ContextApi({ children }) {
    const year = new Date()
    const currentYear = year.getFullYear()

    const value = {
        currentYear,


    }

    return (
        <UserContentApi.Provider value={value}>
            {children}
        </UserContentApi.Provider>
    )
}


