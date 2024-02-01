import Image from 'next/image'
import React from 'react'

export default function Remote() {
  return (
    <div>
        <Image src='https://images.unsplash.com/photo-1610780757769-d46802dc2675?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='A lady in a forest' width='500' height='400'/>
        
        <Image src='https://i.pinimg.com/236x/f3/ac/b8/f3acb8f8a94c39995c262f125a37c6e4.jpg' alt='A lady listening to music' width='500' height='400'/>
    </div>
  )
}
