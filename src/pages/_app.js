import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
