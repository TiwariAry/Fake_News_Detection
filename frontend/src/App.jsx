import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.setAttribute('dataTheme', 'dark');
        } else {
            document.documentElement.setAttribute('dataTheme', 'light');
        }
    }, [darkTheme]);

    return (
        <main className={"flex flex-col h-[100vh] items-center epunda-slab-font gap-4 p-4 epunda-slab-font dark:bg-black"}>
            <div
                className={'fixed right-3 top-4 p-2 w-[40px] active:scale-85 transition-transform ease-in cursor-pointer dark:bg-white rounded-xl'}
                onClick={() => setDarkTheme(!darkTheme)}
            >
                {darkTheme ? <img src={'/dark-mode.png'} alt="dark mode" /> : <img src={'/light-mode.png'} alt="light mode" />}
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
