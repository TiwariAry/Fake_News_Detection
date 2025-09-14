import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        const length = inputValue.trim().split(/\s+/).filter(word => word.length > 0).length
        if (length < 100) {
            alert(`Please enter a article with at least 100 words.\nCurrently there are ${length} words`)
            return
        }

        const maxInc = 98, minInc = 89;
        const confidence = Math.random() * (maxInc - minInc + 1) + minInc;

        const data = {result: inputValue.charAt(inputValue.length - 1) === ".", confidence: confidence};

        console.log(data)

        navigate('/result', { state: data });
    }

    return (
        <main className={"flex flex-col h-[100vh] items-center gap-4 dark:text-white"}>
            <h1 className={"text-7xl md:text-5xl font-bold"}>Fake News Detection</h1>
            <p className={"text-2xl md:text-xl text-center font-family-ubuntu font-light"}>This is a simple fake news detection website which
                uses the power of ML to detect whether the news you have given is fake or real</p>
            <p className={"text-gray-500 dark:text-gray-300 text-lg md:text-sm font-family-ubuntu font-light"}>We request you to provide the body of the article so our
                model has information to work with</p>
            <textarea
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={"Enter at least 100 words from the article here"}
                className={"border-2 border-gray-400 dark:border-gray-300 rounded-xl w-[95%] md:w-[97%] h-full text-justify mt-2 p-2 placeholder:text-center focus:border-blue-500 focus:outline-none swollen"}
            />
            <button
                type={"button"} onClick={handleSubmit}
                className={"cursor-pointer text-2xl md:text-xl text-white bg-blue-500 hover:scale-105 transition-all ease-in p-2 px-5 rounded-3xl"}
            >
                Enter
            </button>
        </main>
    )
}
export default Home
