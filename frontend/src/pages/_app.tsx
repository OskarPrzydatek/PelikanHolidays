import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { useSession } from "next-auth/react"

type AuthProps = {
  children: React.ReactNode;
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

function Auth({ children }: AuthProps) {
  const { data: session, status } = useSession({required: true})
  const isUser = !!session?.user

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default MyApp
