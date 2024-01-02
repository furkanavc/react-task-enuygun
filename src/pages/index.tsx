import { Card } from '@/components/Card'
import { useCallback, useState } from 'react'
import { Person } from '@/types/Person'
import { allPerson } from '@/graphql/queries'
import { unVoteMutation, voteMutation } from '@/graphql/mutations'
import { apiGraphqlRequest } from '@/helpers/request'
import { voteLogger } from '../helpers/logger'

type HomeProps = { data: { PersonAll: Person[] } }
type PartialPerson = Pick<Person, 'id' | 'voteCount'>
const updatePersonState = (partialPerson: PartialPerson) => (personList: Person[]) =>
  personList
    .map((p) => (partialPerson.id === p.id ? { ...p, ...partialPerson } : p))
    .sort((a, b) => b.voteCount - a.voteCount)

export default function Home({ data }: HomeProps) {
  const [personList, setPersonList] = useState(data.PersonAll)

  const onMinusClick = useCallback(
    (person: Person) => () => {
      apiGraphqlRequest<{ unVotePerson: PartialPerson }>(unVoteMutation(person.id)).then(
        ({ data }) => setPersonList(updatePersonState(data.unVotePerson))
      )
      voteLogger(person, '-')
    },
    []
  )
  const onPlusClick = useCallback(
    (person: Person) => () => {
      apiGraphqlRequest<{ votePerson: PartialPerson }>(voteMutation(person.id)).then(({ data }) =>
        setPersonList(updatePersonState(data.votePerson))
      )
      voteLogger(person, '+')
    },
    []
  )

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {personList.map((person: Person, i) => (
          <Card
            key={person.id}
            person={person}
            onPlusClick={onPlusClick(person)}
            onMinusClick={onMinusClick(person)}
          />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await apiGraphqlRequest<HomeProps['data']>(allPerson())
  return { props: { data: res.data ?? { PersonAll: [] } } }
}
