import Image from 'next/image'
import React from 'react'

const greetMe = 'Hello Everybody'

export default function Main() {
  return (
    <div className="grid grid-cols-2 mt-10">
        <div>
        <Image src='/backview.jpg' alt="lady walking" width={600} height={500}/>
            
        </div>

        <div className="text-3xl bg-slate-950 text-white flex flex-col justify-center items-center">
        <h2>Good morning, {greetMe}</h2>
        <h1>fundamentals of React JS</h1>
        </div>
    </div>
  )
}
