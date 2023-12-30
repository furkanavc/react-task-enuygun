import { Card } from '@/components/Card'
import { useCallback, useState } from 'react'
import { Person } from '@/types/Person'
import { allPerson } from '@/graphql/queries'
import { unVoteMutation, voteMutation } from '@/graphql/mutations'
import { apiGraphqlRequest } from '@/helpers/request'

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
    },
    []
  )
  const onPlusClick = useCallback(
    (person: Person) => () => {
      apiGraphqlRequest<{ votePerson: PartialPerson }>(voteMutation(person.id)).then(({ data }) =>
        setPersonList(updatePersonState(data.votePerson))
      )
    },
    []
  )

  return personList.map((person: Person, i) => (
    <Card
      key={person.id}
      person={person}
      onPlusClick={onPlusClick(person)}
      onMinusClick={onMinusClick(person)}
    />
  ))
}

export const getServerSideProps = async () => {
  const res = await apiGraphqlRequest<HomeProps['data']>(allPerson())
  return { props: { data: res.data ?? { PersonAll: [] } } }
}
