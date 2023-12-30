import { NEXT_SERVER_URL } from '@/constants'

export const apiGraphqlRequest = <T = unknown>(body: string): Promise<{ data: T }> =>
  fetch(`${window?.location?.origin ?? NEXT_SERVER_URL}/api/graphql`, {
    method: 'POST',
    body
  }).then((res) => res.json())
