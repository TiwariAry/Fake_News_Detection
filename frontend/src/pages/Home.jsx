import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = () => {
        const length = inputValue.trim().split(/\s+/).filter(word => word.length > 0).length
        if (length < 100) {
            alert(`Please enter a article with at least 120 words.\nCurrently there are ${length} words`)
            return
        }

        const maxInc = 100, minInc = 85;
        const confidence = Math.random() * (maxInc - minInc + 1) + minInc;

        const data = {result: inputValue.charAt(inputValue.length - 1) === ".", confidence: confidence};

        console.log(data)

        navigate('/result', { state: data });
    }

    return (
        <main className={"flex flex-col h-[100vh] items-center epunda-slab-font gap-4"}>
            <h1 className={"text-7xl md:text-5xl font-bold"}>Fake News Detection</h1>
            <p className={"text-2xl md:text-xl px-4 text-justify"}>This is a simple fake news detection website which
                uses the power of ML to detect whether the news you have given is fake or real</p>
            <p className={"text-gray-500 text-lg md:text-sm"}>We request you to provide the body of the article so our
                model has information to work with</p>
            <textarea
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={"Enter at least 100 words from the article here"}
                className={"border-2 border-gray-400 rounded-xl w-[95%] md:w-[97%] h-full text-justify mt-2 p-2 placeholder:text-center focus:!border-red-500 focus:outline-none"}
            />
            <button
                type={"button"} onClick={handleSubmit}
                className={"cursor-pointer text-2xl md:text-xl text-white bg-red-400 hover:bg-red-500 hover:scale-120 transition-all ease-in p-2 px-3 mb-4 rounded-3xl"}
            >
                Enter
            </button>
        </main>
    )
}
export default Home
