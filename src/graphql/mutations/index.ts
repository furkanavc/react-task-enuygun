export const unVoteMutation = (id: string) => `
mutation  {
    unVotePerson(id: "${id}") {
      id
      voteCount
    }
  }
`

export const voteMutation = (id: string) => `
mutation  {
    votePerson(id: "${id}") {
      id
      voteCount
    }
  }
`
