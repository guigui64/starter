import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: varchar("userId", { length: 191 }).notNull(),
  username: text("username").notNull().default("Anon"),
  email: text("email").notNull(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  imageUrl: text("imageUrl"),
  companyName: text("companyName"),
  phoneNumber: text("phoneNumber"),
  labels: text("labels"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type DBUser = typeof users.$inferSelect;
