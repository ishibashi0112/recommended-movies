import {
  ClerkLoaded,
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useClerk,
} from "@clerk/nextjs";
import { useRouter } from "next/router";
import React from "react";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ClerkProvider>
      {router.pathname === "/" && <Component {...pageProps} />}
      {router.pathname !== "/" && (
        <>
          <SignedIn>
            <ClerkLoaded>
              <Component {...pageProps} />;
            </ClerkLoaded>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default MyApp;
