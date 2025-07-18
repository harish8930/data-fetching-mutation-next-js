"use client";

import { useEffect } from "react";

export default function ErroPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <>
      <div className="flex item-center justify-center h-screen">
        <div className="text-2xl text-red-500">Error Fetching User Data!</div>
      </div>
    </>
  );
}
