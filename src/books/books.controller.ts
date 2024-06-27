import { Context } from "hono";
import { booksService, getBooksService, createBook, updateBook, deleteBook } from "./books.service";

const listBooks = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await booksService(limit);
          if (data == null || data.length == 0) {
            return c.text("Book not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getBook = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const book = await getBooksService(id);
    if (book == undefined) {
        return c.text("Book not found", 404);
    }
    return c.json(book, 200);
}

export{
    listBooks,
        getBook
}

// create a new order in the database
export const createOneBook = async (c: Context) => {
    try {
        const book = await c.req.json();
       await createBook(book);
       return c.text("Book created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a order in the database
export const updateOneBook = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const book = await c.req.json();
        await updateBook(id, book);
        return c.text("Book updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a order from the database
export const deleteOneBook = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteBook(id);
        return c.text("Book deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}