import React from 'react'
import Chapter from './organisms/chapter/index'
import Header from './organisms/header/index'
import "./styles.scss"
import suffixSVG from '../assets/images/chapter-suffix.svg'
function App() {
    return (
        <div className='app'>
            <Header />
            <div className="app__chapter" >
                <Chapter className="app__chapter" suffixSVG={suffixSVG}>
                    <div className='row'>
                        <h1 className="col-6">DG</h1>
                    </div>
                </Chapter>
            </div>
            <div className="app__chapter" >
                <Chapter type="dark">
                    <div className='row'>
                        <h1 className="col-6">DG</h1>
                    </div>
                </Chapter>
            </div>
        </div>

    );
}

export default App;