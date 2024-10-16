import React from 'react'
import bgsrc from '/public/bg.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}
export default function Page() {
  return (
    <div className=' h-screen relative'>
      <Hero imgUrl={bgsrc} altTxt='bg.jpg' content='Welcome to my website' />
    </div>
  )
}
