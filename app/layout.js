import { Manrope } from "next/font/google"; // Step 1: Import Manrope
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

// Step 2: Use Manrope instead of Inter
const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Monity",
  description: "Let's stop u from going broke",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          // Set to false to show development mode warnings (default dev UI changes)
          // Change to true temporarily to simulate production look
          unsafe_disableDevelopmentModeWarnings: false,
        },
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${manrope.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-green-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>© 2025 Monity. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
