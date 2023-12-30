export const allPerson = () => `
{
  PersonAll {
    id
    email
    fullName
    image
    voteCount
  }
}
`

export const getPerson = (id: string) => `
{
  Person(id: "${id}") {
    id
    email
    fullName
    image
    voteCount
  }
}
`
