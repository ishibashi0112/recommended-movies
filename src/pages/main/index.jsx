import React, { useEffect } from "react";
import Head from "next/head";
import Header from "src/components/Header";
import { useUser } from "@clerk/nextjs";
import { useSnapshot } from "valtio";
import { countState } from "src/stores/valtioState";

const Top = () => {
  const countSnap = useSnapshot(countState);
  const user = useUser();

  const getCurrentEmail = async () => {
    //clerkClientからログインEmailデータを取得
    const email = { email: user.emailAddresses[0].emailAddress };

    const emailParams = new URLSearchParams(email);
    const res = await fetch(`/api/findUser/?${emailParams}`);
    if (res.ok) {
      const resJson = await res.json();
      return resJson;
    } else {
      return null;
    }
  };

  const createUser = async () => {
    //clerkClientからログインEmailデータを取得
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

  //emailがDBに登録されていない場合は、Userデータを作成する。
  const ifCreateUser = async () => {
    const email = await getCurrentEmail();
    if (!email) {
      await createUser();
      alert(`DBに登録が無かったため,userデータを作成しました。`);
    } else {
      alert("既にuserデータが存在します");
    }
  };

  useEffect(() => {
    if (countSnap.count < 1) {
      ifCreateUser();
    }
    countState.count += 1;
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />
    </div>
  );
};

export default Top;
