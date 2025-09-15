import {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoadingScreen from "../components/LoadingScreen.jsx";

const Result = () => {
    const location = useLocation();

    const data = location?.state;

    const result = data?.result;
    const confidence = data?.confidence;

    const [loading, setLoading] = useState(true);
    const [triggerExit, setTriggerExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTriggerExit(true); // Tell LoadingScreen to start exit animation
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={"flex flex-col justify-center items-center h-full gap-8 px-20 my-5 dark:text-white swollen rounded-xl"}>
            {loading && <LoadingScreen
                triggerExit={triggerExit}
                setLoading={setLoading}
            />}

            <div className="text-center">
                <h1 className={`text-6xl md:text-4xl font-bold mb-4 ${
                    result ? 'text-green-600' : 'text-red-600'
                }`}>
                    {result ? 'This article seems to be REAL' : 'This article seems to be FAKE'}
                </h1>

                <div className={`inline-block px-6 py-3 rounded-full text-white text-xl md:text-lg font-semibold ${
                    result ? 'bg-green-500' : 'bg-red-500'
                }`}>
                    {confidence !== undefined ? confidence.toFixed(2) : ''}% Confident
                </div>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400 max-w-2xl">
                <p className="text-lg md:text-base mb-2">
                    Our AI model has analyzed the article content and provided this assessment.
                </p>
                <p className="text-sm">
                    Please use this as guidance and verify with multiple sources for important decisions.
                </p>
            </div>

            <div className="mt-8">
                <Link
                    to={'/'}
                    className="group flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Check Another Article
                </Link>
            </div>

            <div className={`text-8xl md:text-6xl ${result ? 'text-green-500' : 'text-red-500'}`}>
                {result ? '✓' : '✗'}
            </div>
        </div>
    )
}

export default Result