import { Inter } from 'next/font/google'
import { Card } from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Card onMinusClick={console.log} onPlusClick={console.log} />
    </>
  )
}
