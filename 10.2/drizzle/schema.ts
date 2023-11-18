import {
  pgTable,
  pgEnum,
  varchar,
  foreignKey,
  bigserial,
  bigint,
  timestamp,
  unique,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

export const enumPostsType = pgEnum("enum_Posts_type", [
  "post",
  "repost",
  "reply",
]);
export const enumMediaType = pgEnum("enum_Media_type", [
  "image",
  "video",
  "gif",
]);

export const posts = pgTable(
  "Posts",
  {
    id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
    type: enumPostsType("type").default("post").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referenceId: bigint("referenceId", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    userId: bigint("userId", { mode: "number" })
      .notNull()
      .references(() => users.id),
    content: varchar("content", { length: 280 }).notNull(),
    postedAt: timestamp("postedAt", { withTimezone: true, mode: "string" }),
    createdAt: timestamp("createdAt", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
    deletedAt: timestamp("deletedAt", { withTimezone: true, mode: "string" }),
  },
  (table) => {
    return {
      postsReferenceIdFkey: foreignKey({
        columns: [table.referenceId],
        foreignColumns: [table.id],
        name: "Posts_referenceId_fkey",
      }),
    };
  },
);

export const users = pgTable(
  "Users",
  {
    id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    username: varchar("username", { length: 30 }).notNull(),
    email: varchar("email", { length: 120 }).notNull(),
    emailVerifiedAt: timestamp("emailVerifiedAt", {
      withTimezone: true,
      mode: "string",
    }),
    passwordHash: varchar("passwordHash", { length: 512 }).notNull(),
    bio: varchar("bio", { length: 160 }).notNull(),
    location: varchar("location", { length: 30 }),
    website: varchar("website", { length: 100 }),
    createdAt: timestamp("createdAt", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
    updatedAt: timestamp("updatedAt", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
    dateOfBirth: timestamp("dateOfBirth", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
    profilePicture: varchar("profilePicture", { length: 1024 }).notNull(),
    coverPicture: varchar("coverPicture", { length: 1024 }).notNull(),
    isPublic: boolean("isPublic").default(false).notNull(),
  },
  (table) => {
    return {
      usersUsernameKey: unique("Users_username_key").on(table.username),
      usersEmailKey: unique("Users_email_key").on(table.email),
    };
  },
);

export const follows = pgTable("Follows", {
  id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  followerId: bigint("followerId", { mode: "number" })
    .notNull()
    .references(() => users.id),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  followingId: bigint("followingId", { mode: "number" })
    .notNull()
    .references(() => users.id),
  timestamp: timestamp("timestamp", {
    withTimezone: true,
    mode: "string",
  }).notNull(),
});

export const likes = pgTable("Likes", {
  id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  userId: bigint("userId", { mode: "number" })
    .notNull()
    .references(() => users.id),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  postId: bigint("postId", { mode: "number" })
    .notNull()
    .references(() => posts.id),
  timestamp: timestamp("timestamp", {
    withTimezone: true,
    mode: "string",
  }).notNull(),
});

export const media = pgTable("Media", {
  id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
  index: integer("index").notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  postId: bigint("postId", { mode: "number" }).references(() => posts.id),
  mediaUrl: varchar("mediaUrl", { length: 1024 }).notNull(),
  type: enumMediaType("type").notNull(),
});
