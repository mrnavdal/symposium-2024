import type { Metadata } from "next";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import "@/styles/globals.css";
import '@/styles/calendar.css'
import { ClientAnimatePresence } from "@/components/ClientAnimatePresence";
export const metadata: Metadata = {
  title: "Symposium 2024",
  description: "Webová brožura pro konferenci Symposium 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans bg-background`}>
        <ClientAnimatePresence>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <Navigation />
              <div className="lg:ml-[280px]">
                <main className="w-full">
                  {children}
                </main>
              </div>
            </div>
          </ThemeProvider>
        </ClientAnimatePresence>
      </body>
    </html>
  );
}
