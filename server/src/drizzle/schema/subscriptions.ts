import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const subscriptons = pgTable("subscriptions", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
});
