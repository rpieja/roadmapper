import { useUser } from "@clerk/nextjs";
import { unstable_noStore as noStore } from "next/cache";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // const { isSignedIn, user, isLoaded } = useUser();

  const { data } = api.roadmapItem.getAll.query();
  console.log("dupa");
  return (
    <div>
      <h1>Roadmapper</h1>
      <div>
        {data?.map((roadmapItem) => (<div key={roadmapItem.id}>{roadmapItem.summary}</div>))}
      </div>
    </div>
  );
}

