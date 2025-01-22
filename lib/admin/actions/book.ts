"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db.insert(books).values({
      ...params,
      availableCopies: params.totalCopies,
    })
    .returning() // returning means we want to get back the value that was just created in the database

    return {
      succes: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };

  } catch (error) {
    console.log(error);
    return {
      succes: false,
      message: "An error ocurred creating the book",
    };
  }
};
