import { Person } from '@/types/Person'

const logToServer = (msg: string) => {
  console.log(msg)
}

export const voteLogger = (person: Person, str?: string) => {
  str === '+'
    ? logToServer(`Voted for ${person?.fullName} new vote count is ${person?.voteCount + 1}`)
    : logToServer(`Unvoted for ${person?.fullName} new vote count is ${person?.voteCount - 1}`)
}

export const routeLogger = (url: string) => {
  logToServer(`App is changing to ${url}`)
}
