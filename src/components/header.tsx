"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
    {path:'/performance',color:'text-purple-500',name:'Performance'},
    {path:'/reliability',color:'text-blue-500',name:'Reliability'},
    {path:'/scale',color:'text-green-500',name:'Scale'}
]
export default function Header() {
    const pathName = usePathname()
  return (
    <div className="absolute w-full z-10 ">
          <div className="flex justify-between items-center container mx-auto text-white p-8" >
            <Link href="/" className="text-3xl font-bold">Home</Link>

            <div className="text-xl space-x-4">
            {linkData.map((link) => (
                <Link key={link.path} href={link.path} className={`text-xl ${pathName == link.path?  link.color:''}`}>
                    {link.name}
                </Link>
            ))}
            </div>
          </div>
        </div>
  )
}
