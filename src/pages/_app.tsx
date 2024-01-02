import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { routeLogger } from '@/helpers/logger'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', routeLogger)
    return () => {
      router.events.off('routeChangeStart', routeLogger)
    }
  }, [router])
  return <Component {...pageProps} />
}
