import { pgTable, varchar, uuid, text } from "drizzle-orm/pg-core";

export const blogTable = pgTable("blogs", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 100 }).notNull(),
  body: text().notNull().unique(),
  orgId: text().notNull(),
});

export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;

