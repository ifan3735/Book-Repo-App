import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { BooksSelect, booksTable } from "../drizzle/schema";

const booksService = async (limit?: number)=> {
    if (limit) {
        return await db.query.booksTable.findMany({
            limit: limit,
        });
    }
    return await db.query.booksTable.findMany();
}

const getBooksService = async (id: number)=> {
    return await db.query.booksTable.findFirst({
        where: eq(booksTable.id, id)
    })
}

export{
    booksService,
    getBooksService
}

// create a new order in the database
export const createBook = async (book: BooksSelect)=> {
   await db.insert(booksTable).values(book)
   return 'book created successfully';
}

// update an order in the database
export const updateBook = async (id: number, book: any)=> {
    await db.update(booksTable).set(book).where(eq(booksTable.id, id))
    return 'Book updated successfully';
}

// delete an order from the database
export const deleteBook = async (id: number)=> {
    await db.delete(booksTable).where(eq(booksTable.id, id))
    return 'Book deleted successfully';
}