import React, { useState, useEffect } from 'react'
import Button from './atoms/button/index'

function App() {

    useEffect(() => {

    })

    return (
        <div className='container'>
            <div className='row'>
                <h1 className="col-6">DGMANN</h1>
                <div className='col-6'>
                    <Button text='Submit' />
                </div>
            </div>
        </div>

    );
}

export default App;