import { Hono } from 'hono';
import { listBooks, getBook, createOneBook, updateOneBook, deleteOneBook } from './books.controller';

export const bookRouter = new Hono();

// get all orders      api/orders
bookRouter.get('/books', listBooks);

// get a single order    api/orders/1
bookRouter.get('/books/:id', getBook);

bookRouter.post('/books', createOneBook);

bookRouter.put('/books/:id', updateOneBook);

bookRouter.delete('/books/:id', deleteOneBook);