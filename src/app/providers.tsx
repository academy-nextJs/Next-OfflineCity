"use client";

import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <Provider store={store}>{children}</Provider>
    </HeroUIProvider>
  );
}
