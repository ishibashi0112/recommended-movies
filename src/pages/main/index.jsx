import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Main from "src/components/Main";
import Header from "src/components/Header";
import { useClerk, useSession, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Top = () => {
  const user = useUser();

  const createUserData = async () => {
    const email = { email: user.emailAddresses[0].emailAddress };
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    };
    const res = await fetch("/api/createUser", params);
  };

  const getCurrentEmail = async () => {
    const email = { email: user.emailAddresses[0].emailAddress };
    const res = await fetch("/api/findUser");
    const resJson = await res.json();
    console.log(resJson);
  };

  useEffect(() => {
    if (!getCurrentEmail()) {
      createUserData();
    }
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Top;