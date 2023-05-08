import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
