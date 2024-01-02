import React from 'react'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { getPerson } from '@/graphql/queries'
import { apiGraphqlRequest } from '@/helpers/request'
import { Person } from '@/types/Person'
import Image from 'next/image'

type DetailProps = { data: { Person: Person } }
function Detail({ data }: DetailProps) {
  return (
    <div className="container mx-auto p-5">
      <Link href="/" className="custom-button mb-10">
        Back
      </Link>
      {/* <div className="flex h-96 w-full flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
        <div className="relative h-full w-full lg:w-1/3">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={data.Person?.image ?? 'https://picsum.photos/200/300'}
          />
        </div>
        <div className="flex flex-col">
          <span>{data.Person?.fullName}</span>
          <span>{data.Person?.id}</span>
          <span>{data.Person?.email}</span>
        </div>
      </div> */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="size-48 overflow-hidden rounded-full">
          <div className="relative  h-full w-full">
            <Image
              fill
              alt="image"
              className="object-cover"
              src={data.Person?.image ?? 'https://picsum.photos/200/300'}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold lg:text-6xl">{data.Person?.fullName}</h1>
          <p className="text-sm text-gray-500">{data.Person?.email}</p>
          <p className="text-sm text-gray-500">{data.Person?.id}</p>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const res = await apiGraphqlRequest<DetailProps['data']>(getPerson(ctx.query.id as string))
  return { props: { data: res.data ?? { Person: undefined } } }
}

export default Detail
