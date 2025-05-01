"use client";

import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <Provider store={store}>
          {children}
          <ToastContainer autoClose={3000} />
        </Provider>
      </HeroUIProvider>
    </SessionProvider>
  );
}
