import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { bookRouter } from './books/books.router'
import { cors } from 'hono/cors'
import 'dotenv/config'
const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:5173',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', bookRouter)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
