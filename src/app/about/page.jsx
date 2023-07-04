import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div>
      <h2>about page</h2>
      <Image src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
      alt='a student in library' width={500} height={600}/>
    </div>
  )
}
