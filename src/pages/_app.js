import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <QueryClientProvider client={queryClient} >
        <Toaster />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
