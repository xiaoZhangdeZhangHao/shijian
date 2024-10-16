import Hero from '@/components/hero'
import React from 'react'
import bgsrc from '/public/bg.jpg'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Scale',
}
export default function Scale() {
  return (
    <div>
      <Hero imgUrl={bgsrc} altTxt='bg.jpg' content='Scale Page' />
    </div>
  )
}
