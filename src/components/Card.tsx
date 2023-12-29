import React from 'react'
import Image from 'next/image'
type CardProps = {
  onPlusClick?: () => void
  onMinusClick?: () => void
}
export const Card = ({ onMinusClick, onPlusClick }: CardProps) => (
  <div className={'relative flex h-96 w-full max-w-xs flex-col overflow-hidden rounded-md border'}>
    <div className="relative h-full w-full">
      <Image src="https://picsum.photos/200/300" fill alt="dummyimage" className="object-cover" />
    </div>
    <div className="flex h-12 items-center justify-around bg-black">
      <span
        onClick={onMinusClick}
        className="flex size-10 items-center justify-center rounded-md bg-slate-400 text-lg hover:bg-slate-300">
        -
      </span>
      <span
        onClick={onPlusClick}
        className="flex size-10 items-center justify-center rounded-md bg-slate-400 text-lg hover:bg-slate-300">
        +
      </span>
    </div>
  </div>
)
