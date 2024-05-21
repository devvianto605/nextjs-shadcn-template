import AppProvider from "@/providers/AppProvider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "D605's T3 + Shadcn/ui App",
  description: "Built-in with React Query, React Hook Form, and Zustand.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${GeistSans.variable}`} lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
