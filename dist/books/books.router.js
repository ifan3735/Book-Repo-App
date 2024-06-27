"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const hono_1 = require("hono");
const books_controller_1 = require("./books.controller");
exports.bookRouter = new hono_1.Hono();
// get all orders      api/orders
exports.bookRouter.get('/books', books_controller_1.listBooks);
// get a single order    api/orders/1
exports.bookRouter.get('/books/:id', books_controller_1.getBook);
exports.bookRouter.post('/books', books_controller_1.createOneBook);
exports.bookRouter.put('/books/:id', books_controller_1.updateOneBook);
exports.bookRouter.delete('/books/:id', books_controller_1.deleteOneBook);
