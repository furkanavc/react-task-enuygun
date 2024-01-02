export const allPerson = () => `
{
  PersonAll {
    id
    email
    fullName
    jobTitle
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
    jobTitle
    image
    voteCount
  }
}
`
