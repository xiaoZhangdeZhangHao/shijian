import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface IProps{
    imgUrl: StaticImageData;
    altTxt:string;
    content:string;
}
export default function Hero(props:IProps) {
  return (
    <div className=' h-screen relative'>
      <div className='absolute inset-0'>
        {/* cover 保持比例  展示不全  有的图片内容溢出 content 显示不全 */}
        <Image  src={props.imgUrl}  fill style={{objectFit: 'cover'}} alt={props.altTxt} />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-800'></div>
      </div>
      <div className='flex justify-center items-center h-full'>
        <h1 className='absolute text-white text-6xl'>{props.content}</h1>
      </div>
    </div>
  )
}
