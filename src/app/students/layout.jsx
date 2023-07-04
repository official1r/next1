import React from 'react'
import Courses from './courses'
import { Outfit } from 'next/font/google'

const slow = Outfit({
    subsets : ['latin'],
    weight : ['500']
})

export const metadata = {
    title: 'Student in Univelcity',
    description: 'Different student\'s categories',
}

export default function layout({children}) {
    return (
      <div className={slow.className}>
      <div>
        {children}
         <Courses />
    </div>
      </div>
  )
}
