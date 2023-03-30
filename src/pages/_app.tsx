import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../style/globals.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
