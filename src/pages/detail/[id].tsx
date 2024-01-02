import React from 'react'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { getPerson } from '@/graphql/queries'
import { apiGraphqlRequest } from '@/helpers/request'
import { Person } from '@/types/Person'

type DetailProps = { data: { Person: Person } }
function Detail({ data }: DetailProps) {
  return (
    <div>
      <div>{data.Person.id}</div>
      <div>{data.Person.fullName}</div>
      <Link href="/">Back</Link>
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const res = await apiGraphqlRequest<DetailProps['data']>(getPerson(ctx.query.id as string))
  return { props: { data: res.data ?? { Person: undefined } } }
}

export default Detail
