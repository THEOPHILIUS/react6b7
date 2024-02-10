import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FruitCat({fruits}) {

    const fruitDisplay = fruits.map((fruit,index) => (
        <section key={index} className='hover:shadow-2xl border border-solid m-5'>
            <Link href={`/fruits/${fruit.name.split(' ').join('-')}`}>
            <Image src={`https://robohash.org/${fruit.name}`} alt={fruit.name} width={120} height={120}/>
            <h2 className='font-bold capitalize'>{fruit.name}</h2>
            <p className='bg-gray-400 font-serif'>${fruit.price}</p>
            </Link>
        </section>
    ))
  return (
    <div className='grid grid-cols-3'>
        {fruitDisplay}
    </div>
  )
}