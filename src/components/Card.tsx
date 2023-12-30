import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Person } from '@/types/Person'

type CardProps = {
  person?: Person
  onPlusClick?: () => void
  onMinusClick?: () => void
}
export const Card = ({ person, onMinusClick, onPlusClick }: CardProps) => {
  return (
    <Link href={['detay', person?.id || ''].join('/')}>
      <div
        className={'relative flex h-96 w-full max-w-xs flex-col overflow-hidden rounded-md border'}>
        <div className="relative h-full w-full">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={person?.image ?? 'https://picsum.photos/200/300'}
          />
        </div>
        <div>{person?.fullName}</div>
        <div>{person?.voteCount}</div>
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
    </Link>
  )
}
