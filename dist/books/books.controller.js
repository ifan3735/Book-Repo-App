"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneBook = exports.updateOneBook = exports.createOneBook = exports.getBook = exports.listBooks = void 0;
const books_service_1 = require("./books.service");
const listBooks = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, books_service_1.booksService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Book not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listBooks = listBooks;
const getBook = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const book = await (0, books_service_1.getBooksService)(id);
    if (book == undefined) {
        return c.text("Book not found", 404);
    }
    return c.json(book, 200);
};
exports.getBook = getBook;
// create a new order in the database
const createOneBook = async (c) => {
    try {
        const book = await c.req.json();
        await (0, books_service_1.createBook)(book);
        return c.text("Book created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneBook = createOneBook;
// update a order in the database
const updateOneBook = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const book = await c.req.json();
        await (0, books_service_1.updateBook)(id, book);
        return c.text("Book updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneBook = updateOneBook;
// delete a order from the database
const deleteOneBook = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, books_service_1.deleteBook)(id);
        return c.text("Book deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneBook = deleteOneBook;
