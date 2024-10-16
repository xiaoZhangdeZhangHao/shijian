import Hero from '@/components/hero'
import React from 'react'
import bgsrc from '/public/bg.jpg'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Reliability() {
  return (
    <div>
      <Hero imgUrl={bgsrc} altTxt='bg.jpg' content='Reliability Page' />
    </div>
  )
}
