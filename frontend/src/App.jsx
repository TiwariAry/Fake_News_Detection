import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";

import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP)

const App = () => {
    const [displayMode, setDisplayMode] = useState('light');

    return (
        <main>
            <div
                className={'fixed right-3 top-4 w-[30px] active:scale-85     transition-transform ease-in'}
                onClick={() => {
                    if (displayMode === 'light') {
                        setDisplayMode('dark');
                    }
                    else {
                        setDisplayMode('light');
                    }
                }}
            >
                {displayMode === 'light' ? <img src={'/light-mode.png'} alt="light mode" /> : <img src={'/dark-mode.png'} alt="dark mode" />}
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/result" element={<Result/>} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
