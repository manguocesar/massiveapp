'use server';

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

const Page = async () => {

  const bookList = await db.select().from(books).limit(10);

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Table</p>
        {bookList.map((book) => (
          <div className="my-2" key={book.id}>
            <div className="flex justify-between bg-gray-200 p-2 rounded-xl">
              <p>
                {book.title}
              </p>
              <p>
                {book.totalCopies}
              </p>
            </div>
          </div>
        ))
        }
      </div>
    </section>
  );
};

export default Page;