"use client";

import { ReactNode } from "react";
import { MenuProvider } from "@/context/MenuContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <MenuProvider>{children}</MenuProvider>;
}
