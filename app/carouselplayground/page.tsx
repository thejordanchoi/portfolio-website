'use client'

export default function CarouselPlaygroundPage() {
    const handleScroll = () => {
        
        const scrollableElement = document.getElementById("test");
        const scrollPosition = scrollableElement?.scrollTop;
        console.log(scrollPosition)
        console.log(scrollableElement?.scrollHeight);
        const totalHeight = scrollableElement?.scrollHeight;
        if (scrollPosition && totalHeight) {
            let percentOfPage = scrollPosition / totalHeight
            let page = Math.ceil(percentOfPage * 2)
            console.log(page)
        }
        
    }
    return (
        <div id="test" onScroll={handleScroll} className="snap-y snap-mandatory overflow-visible overflow-scroll h-dvh">
            <div className="h-dvh snap-start bg-amber-200 flex items-center justify-center">
                <h1>Section 1</h1>
            </div>
            <div className="h-dvh snap-start bg-cyan-200 flex items-center justify-center">
                <h1>Section 2</h1>
            </div>
            <div className="h-dvh snap-start bg-fuchsia-200 flex items-center justify-center">
                <h1>Section 3</h1>
            </div>
        </div>
    )
}