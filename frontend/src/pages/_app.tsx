import type { AppProps } from "next/app";
import SessionProvider from "@context/SessionProvider/SessionProvider";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
