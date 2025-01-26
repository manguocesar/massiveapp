import { Button } from "@/components/ui/button";
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import React from 'react'
import Link from "next/link";

const Page = async () => {


  const userList = await db.select().from(users).limit(10);


  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Users</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New user
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Table</p>
        {userList.map((user) => (
          <div className="my-2" key={user.id}>
            <div className="flex justify-between bg-gray-200 p-2 rounded-xl">
              <p>
                {user.fullName}
              </p>
              <p>
                {user.status}
              </p>
              <p>
                {user.role}
              </p>
            </div>
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default Page