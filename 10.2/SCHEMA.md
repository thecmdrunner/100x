Assume all fields as non-nullable unless otherwise specified.

## User

| Field           | Type          | Constraints           | Note               |
| --------------- | ------------- | --------------------- | ------------------ |
| id              | bigint serial | primary key           | Autoincrement      |
| name            | string        | max 50 chars          |                    |
| username        | string        | unique, max 30 chars  |                    |
| email           | string        | unique, max 120 chars |                    |
| passwordHash    | string        | max 512 chars         | Argon2 algorithm   |
| bio             | string        | max 160 chars         |                    |
| isPublic        | boolean       |                       | default: true      |
| profilePicture  | string        | max 1024 chars        |                    |
| coverPicture    | string        | max 1024 chars        |                    |
| location        | string        | max 30 chars          |                    |
| website         | string        | max 100 chars         |                    |
| dateOfBirth     | timestamp     |                       |                    |
| emailVerifiedAt | timestamp     | nullable              |                    |
| deletedAt       | timestamp     | nullable              | Soft-deletion only |
| createdAt       | timestamp     |                       | for housekeeping   |
| updatedAt       | timestamp     |                       |                    |

## Post

| Field       | Type                       | Constraints                     | Note                              |
| ----------- | -------------------------- | ------------------------------- | --------------------------------- |
| id          | bigint serial              | primary key                     | Autoincrement                     |
| userId      | bigint serial              | foriegn key - User.id           |                                   |
| type        | enum - Post, Repost, Reply |                                 | default: Post                     |
| referenceId | bigint serial              | foriegn key - Post.id, nullable |                                   |
| content     | string                     | max 280 chars                   |                                   |
| createdAt   | timestamp                  |                                 | for housekeeping                  |
| postedAt    | timestamp                  | nullable                        | Not a draft tweet, for example... |
| deletedAt   | timestamp                  | nullable                        | Soft-deletion only                |
| updatedAt   | timestamp                  |                                 |                                   |

## Like

| Field     | Type          | Constraints           | Note                                  |
| --------- | ------------- | --------------------- | ------------------------------------- |
| id        | bigint serial | primary key           | Autoincrement                         |
| userId    | bigint serial | foriegn key - User.id |                                       |
| postId    | bigint serial | foriegn key - Post.id |                                       |
| timestamp | timestamp     |                       | Timestamp of when user liked the post |
| createdAt | timestamp     |                       | for housekeeping                      |
| updatedAt | timestamp     |                       |                                       |

## Follow

| Field       | Type          | Constraints           | Note                                           |
| ----------- | ------------- | --------------------- | ---------------------------------------------- |
| id          | bigint serial | primary key           | Autoincrement                                  |
| followerId  | bigint serial | foriegn key - User.id |                                                |
| followingId | bigint serial | foriegn key - User.id |                                                |
| timestamp   | timestamp     |                       | Timestamp of when a user followed another user |
| createdAt   | timestamp     |                       | for housekeeping                               |
| updatedAt   | timestamp     |                       |                                                |

## Media

| Field     | Type                     | Constraints           | Note                            |
| --------- | ------------------------ | --------------------- | ------------------------------- |
| id        | bigint serial            | primary key           | Autoincrement                   |
| postId    | bigint serial            | foriegn key - Post.id |                                 |
| index     | int                      |                       | To show media in an order in UI |
| mediaUrl  | string                   | max 1024 chars        |                                 |
| type      | enum - Image, Video, Gif |                       |                                 |
| createdAt | timestamp                |                       | for housekeeping                |
| updatedAt | timestamp                |                       |                                 |
