"use client"
import React from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeProvider = ({children}) => {
    const {theme} = React.useContext(ThemeContext)


    return (
        <div className={theme}>{children}</div>
    )
}

export default ThemeProvider