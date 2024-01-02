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
    <div className="flex h-96 w-full flex-col overflow-hidden rounded-lg   border border-gray-700 bg-gray-800 shadow">
      <div className="relative h-full w-full ">
        <Image
          fill
          alt="image"
          className="object-cover"
          src={person?.image ?? 'https://picsum.photos/200/300'}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {person?.fullName}
        </h5>
        <p className="mb-3 line-clamp-1 font-normal text-gray-700 dark:text-gray-400">
          Vote Count:{person?.voteCount}
        </p>
        <Link
          href={`/detail/${person?.id || ''}`}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  ">
          Detail
        </Link>
        <div className="flex h-12 items-center space-x-1">
          <button
            onClick={onMinusClick}
            className="flex size-10 items-center justify-center rounded-md bg-slate-400 text-lg hover:bg-slate-300">
            -
          </button>
          <button
            onClick={onPlusClick}
            className="flex size-10 items-center justify-center rounded-md bg-slate-400 text-lg hover:bg-slate-300">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
