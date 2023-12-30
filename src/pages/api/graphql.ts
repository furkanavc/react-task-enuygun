import { GRAPHQL_SERVER_URL } from '@/constants'
import { NextApiRequest } from 'next'

const url = `${GRAPHQL_SERVER_URL}/graphql`

export const graphqlFetch = (query: string) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  }).then((response) => response.json())

export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === 'GET') {
    return res.status(500).json('Get method is not valid')
  }

  if (req.body) {
    return graphqlFetch(req.body).then(res.status(200).json)
  } else {
    return res.status(500).json('Body not found')
  }
}
