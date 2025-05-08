"use client";

import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <QueryClientProvider client={client}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              {children}
            </PersistGate>
            <ToastContainer autoClose={3000} />
          </Provider>
        </QueryClientProvider>
      </HeroUIProvider>
    </SessionProvider>
  );
}
