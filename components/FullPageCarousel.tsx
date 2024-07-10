'use client'

import React, { useState, useRef, useEffect } from 'react';

const FullPageCarousel: React.FunctionComponent = () => {
    const [page, setPage] = useState(0);

    const sectionRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null), // Add more refs if you have more sections
    ];

    const scrollToSection = (pageIndex: number) => {
        setPage(pageIndex); // Update the state
        sectionRefs[pageIndex].current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleScroll = () => {
        // TODO: make buttons disappear after timeout of non scroll
        const scrollableElement = document.getElementById("carousel-component")!
        const scrollPosition = scrollableElement.scrollTop;
        const scrollableHeight = scrollableElement.scrollHeight;
        const page = Math.ceil((scrollPosition / scrollableHeight) * 3);
        console.log(page);
        setPage(page);
    }

    // component
    return (
        
        <div id="carousel-component" onScroll={handleScroll} className="snap-y snap-mandatory overflow-y-auto h-dvh">
            <div ref={sectionRefs[0]} className="h-screen snap-start bg-indigo-200 flex items-center justify-center relative">
                <div className="absolute h-full w-full flex flex-col items-center justify-center">
                    <img src="/jordan_headshot.jpeg" alt="jordan-headshot" className="animate-slidein opacity-0 [--slidein-delay:300ms] rounded-full h-24 w-24"></img>
                    <h1 className="animate-slidein opacity-0 [--slidein-delay:500ms] text-white text-5xl font-sans-serif font-light tracking-[.25em]">Jordan Choi</h1>
                    <p className="animate-slidein opacity-0 [--slidein-delay:700ms] text-white text-2xl font-sans-serif font-light tracking-[.15em]">Software Engineering | Photography | Automotive</p>
                    <div className="animate-bounce fixed bottom-5">
                        <img src="/double_arrow_down.svg" alt="scroll_down_arrow" className="animate-slidein opacity-0 [--slidein-delay:1000ms] rounded-full h-8 w-8"></img>
                    </div>
                </div>
            </div>
            <div ref={sectionRefs[1]} className="h-dvh snap-start bg-amber-200 flex items-center justify-center relative">
                <video className="h-full w-full object-cover" playsInline autoPlay muted loop id="gt3rs">
                    <source src="/gt3rs.mp4" type="video/mp4"></source>
                </video>
                <div className="absolute h-full w-full flex items-center justify-center">
                    <h1 className="text-white sm:text-5xl md:text-5xl lg:text-8xl font-sans-serif font-light tracking-[.5em]"><a href="/engineering">ENGINEERING</a></h1>
                </div>
            </div>
            <div ref={sectionRefs[2]} className="h-dvh snap-start bg-cyan-200 flex items-center justify-center relative">
                <video className="h-full w-full object-cover" playsInline autoPlay muted loop id="g80">
                    <source src="/g80_clip.mp4" type="video/mp4"></source>
                </video>
                <div className="absolute h-full w-full flex items-center justify-center">
                    <h1 className="text-white sm:text-5xl md:text-5xl lg:text-8xl font-sans-serif font-light tracking-[.5em]"><a href="/photography">PHOTOGRAPHY</a></h1>
                </div>
            </div>
            <div ref={sectionRefs[3]} className="h-dvh snap-start bg-fuchsia-200 flex items-center justify-center relative">
                <video className="h-full w-full object-cover" playsInline autoPlay muted loop id="g82">
                    <source src="/g82_clip.mp4" type="video/mp4"></source>
                </video>
                <div className="absolute h-full w-full flex items-center justify-center">
                    <h1 className="text-white sm:text-5xl md:text-5xl lg:text-8xl font-sans-serif font-light tracking-[.5em]"><a href="/automotive">AUTOMOTIVE</a></h1>
                </div>
            </div>
            <div className="fixed flex flex-col right-0 top-1/2 transform -translate-y-1/2">
                <button onClick={() => scrollToSection(0)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 0 ? "bg-white" : "bg-transparent")}></button>
                <button onClick={() => scrollToSection(1)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 1 ? "bg-white" : "bg-transparent")}></button>
                <button onClick={() => scrollToSection(2)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 2 ? "bg-white" : "bg-transparent")}></button>
                <button onClick={() => scrollToSection(3)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 3 ? "bg-white" : "bg-transparent")}></button>
            </div>
        </div>
    );
};

export default FullPageCarousel;