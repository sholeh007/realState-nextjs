import Layout from "@/components/organisms/Layout"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import NProgress from "nprogress"
import { useEffect } from "react"
import "../styles/globals.css"
import { customTheme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  NProgress.configure({ showSpinner: false })

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
