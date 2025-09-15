import {useEffect, useRef} from 'react'

import gsap from 'gsap';

const LoadingScreen = ({ triggerExit, setLoading }) => {
    const textRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (triggerExit) {
            gsap.to([videoRef.current, textRef.current], {
                y: -400,
                opacity: 0,
                duration: 2,
                onComplete: () => {
                    setLoading(false);
                }
            });
        }
    }, [triggerExit])

    return (
        <div>
            <p ref={textRef} className={"fixed top-20 left-1/2 -translate-x-1/2 z-20 text-gray-600 text-2xl md:text-xl font-family-ubuntu"}>
                Getting results, hang tight...
            </p>
            <video
                ref={videoRef}
                className={"fixed top-0 left-0 w-screen h-screen z-10 object-contain bg-white dark:bg-black"}
                src={"/loading.mp4"}
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
            >
            </video>
        </div>
    )
}

export default LoadingScreen
