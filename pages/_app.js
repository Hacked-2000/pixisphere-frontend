import '../styles/globals.css'
import { PhotographersProvider } from '../context/PhotographersContext'

export default function App({ Component, pageProps }) {
  return (
    <PhotographersProvider>
      <Component {...pageProps} />
    </PhotographersProvider>
  )
}
