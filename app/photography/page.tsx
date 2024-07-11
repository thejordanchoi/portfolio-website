'use client'

export default function PhotographyPage() {
    return (
        <div>
            <title>Jordan Choi - Photography</title>
            <div className="flex justify-center items-center m-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-4">
                        <img className="rounded-lg" src="photography_photos/1.jpg"></img>
                        <img className="rounded-lg" src="photography_photos/2.jpg"></img>
                        <img className="rounded-lg" src="photography_photos/3.jpg"></img>
                    </div>
                    <div className="space-y-4">
                        <img className="h-auto max-w-full rounded-lg" src="photography_photos/4.jpg"></img>
                        <img className="h-auto max-w-full rounded-lg" src="photography_photos/5.jpg"></img>
                        <img className="h-auto max-w-full rounded-lg" src="photography_photos/6.jpg"></img>
                    </div>
                    <div className="space-y-4">
                        <img className="h-auto max-w-full rounded-lg" src="photography_photos/7.jpg"></img>
                        <img className="h-auto max-w-full rounded-lg" src="photography_photos/8.jpg"></img>
                        <img className="h-auto max-w-full rounded-lg" src="photography_photos/9.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}