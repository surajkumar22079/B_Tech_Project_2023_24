import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

const MainPage = () => {
    return (
        <div className='main-page'>
            <h1 >Instrumentation Lab, IIT Roorkee</h1>
            <Link to="/experiments">Explore</Link>
        </div>
    )
}

export default MainPage
