"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBooksService = exports.booksService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const booksService = async (limit) => {
    if (limit) {
        return await db_1.db.query.booksTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.booksTable.findMany();
};
exports.booksService = booksService;
const getBooksService = async (id) => {
    return await db_1.db.query.booksTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.booksTable.id, id)
    });
};
exports.getBooksService = getBooksService;
// create a new order in the database
const createBook = async (book) => {
    await db_1.db.insert(schema_1.booksTable).values(book);
    return 'book created successfully';
};
exports.createBook = createBook;
// update an order in the database
const updateBook = async (id, book) => {
    await db_1.db.update(schema_1.booksTable).set(book).where((0, drizzle_orm_1.eq)(schema_1.booksTable.id, id));
    return 'Book updated successfully';
};
exports.updateBook = updateBook;
// delete an order from the database
const deleteBook = async (id) => {
    await db_1.db.delete(schema_1.booksTable).where((0, drizzle_orm_1.eq)(schema_1.booksTable.id, id));
    return 'Book deleted successfully';
};
exports.deleteBook = deleteBook;
