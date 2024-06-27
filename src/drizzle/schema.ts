import { pgTable, timestamp, integer, text, serial, decimal, boolean, varchar, date, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from "drizzle-orm";

// Books Table
export const booksTable = pgTable("books",{
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 100 }).notNull(),
    author: varchar("author", { length: 100 }).notNull(),
    year: integer("year").notNull()
});

export type BooksSelect=typeof booksTable.$inferSelect