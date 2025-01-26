import { signOut } from '@/app/api/auth/[...nextauth]/route';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle';
import { books } from '@/database/schema';
import { desc } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {

 const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];

    return <>
        <form className='mb-10' action={async () => {
            'use server';
            await signOut();
            redirect("/sign-in");
        }}>
            <Button>
                Logout
            </Button>
        </form>
        <BookList title='Borrowed Books' books={latestBooks} />
    </>
}

export default Page