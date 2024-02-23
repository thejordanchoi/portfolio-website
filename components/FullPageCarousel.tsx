'use client'

import React, { useState, useRef, useEffect } from 'react';

const FullPageCarousel: React.FunctionComponent = () => {
    const [page, setPage] = useState(0);

    const sectionRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null), // Add more refs if you have more sections
    ];

    const scrollToSection = (pageIndex: number) => {
        setPage(pageIndex); // Update the state
        sectionRefs[pageIndex].current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleScroll = () => {
        const scrollableElement = document.getElementById("carousel-component")!
        const scrollPosition = scrollableElement.scrollTop;
        const scrollableHeight = scrollableElement.scrollHeight;
        const page = Math.ceil((scrollPosition / scrollableHeight) * 2);
        console.log(page);
        setPage(page);
    }

    // component
    return (
        <div id="carousel-component" onScroll={handleScroll} className="snap-y snap-mandatory overflow-y-auto h-dvh">
            <div className="pointer-events-none h-screen w-screen fixed flex flex-col items-center justify-center">
                <h1 className="font-serif tracking-wider text-white text-5xl">Jordan Choi</h1>
                <p className="font-serif text-white text-l">Software Engineering | Photography | Automotive</p>
            </div>
            <div className="fixed flex flex-col right-0 top-1/2">
                <button onClick={() => scrollToSection(0)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 0 ? "bg-white" : "bg-transparent")}></button>
                <button onClick={() => scrollToSection(1)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 1 ? "bg-white" : "bg-transparent")}></button>
                <button onClick={() => scrollToSection(2)} className={"hover:bg-white m-1 mr-5 py-1 px-1 border-2 border-white hover:border-transparent rounded-full " + (page == 2 ? "bg-white" : "bg-transparent")}></button>
            </div>
            <div ref={sectionRefs[0]} className="h-dvh snap-start bg-amber-200 flex items-center justify-center">
                <video className="h-full w-full object-cover" autoPlay muted loop id="gt3rs">
                    <source src="/gt3rs.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div ref={sectionRefs[1]} className="h-dvh snap-start bg-cyan-200 flex items-center justify-center">
                <video className="h-full w-full object-cover" autoPlay muted loop id="g80">
                    <source src="/g80_clip.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div ref={sectionRefs[2]} className="h-dvh snap-start bg-fuchsia-200 flex items-center justify-center">
                <video className="h-full w-full object-cover" autoPlay muted loop id="g82">
                    <source src="/g82_clip.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
};

export default FullPageCarousel;