import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <h2>students page</h2>
      <Image src='/woman.avif' alt='a woman laughing' width={500} height={400}/>
    </div>
  )
}
