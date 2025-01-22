import React from "react";

async function Page({ params }: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id

  return <div>My Post: {id}</div>
}

export default Page;