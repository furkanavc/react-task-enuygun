import { Person } from '@/types/Person'

export const voteLogger = (person: Person, str?: string) => {
  str === '+'
    ? console.log(`Voted for ${person?.fullName} new vote count is ${person?.voteCount + 1}`)
    : console.log(`Unvoted for ${person?.fullName} new vote count is ${person?.voteCount - 1}`)
}
