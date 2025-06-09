import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";

export default  async function HomePage() {
  const user = await currentUser();
  if (!user) {
   return <Guest />;
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Welcome to Sleep Tracker</h1>       
      </div>
      <div className="text-red-600">HomePage</div>
    </>
  );
}
