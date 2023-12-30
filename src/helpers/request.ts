import { NEXT_SERVER_URL } from '@/constants'
import { getWindow } from './getWindow'

export const apiGraphqlRequest = <T = unknown>(body: string): Promise<{ data: T }> =>
  fetch(`${getWindow()?.location?.origin ?? NEXT_SERVER_URL}/api/graphql`, {
    method: 'POST',
    body
  }).then((res) => res.json())
