import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { Poppins } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const metadata = {
  title: "Roadmapper",
  description: "Roadmap management tool",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${poppins.variable}`}>
          <TRPCReactProvider>
            <header>
              <div id="logo">
                <img src="/favicon.png"></img>
                <h1>Roadmapper</h1>
              </div>
              <div id="searchbar">
                <div class="mx-auto max-w-md">
                  <div class="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg">
                    <div class="grid h-full w-12 place-items-center text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      class="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
                      type="text"
                      id="search"
                      placeholder="Search something.."
                    />
                  </div>
                </div>{" "}
              </div>
              <div id="logoutbutton">
                <button>Logout</button>
              </div>
            </header>
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
