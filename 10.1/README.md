100x Microblogging Schema Design

1. User (table name: users)
   id -- bigint serial primary key
   username -- string unique 50 chars max
   profileImage -- string 1024 chars max
   profileBanner -- string 1024 chars max
   email - string
   emailVerifiedAt -- timestamp nullable
   name - string 50 chars max
   deletedAt -- timestamp nullable
   createdAt -- timestamp
   updatedAt -- timestamp
   location -- string 50 chars max
   website -- string 50 chars max
   bio -- text
   dateOfBirth -- timestamp
   isPublic -- boolean
   passwordHash -- string 512 chars max

2. Post (table name: posts)
   id -- bigint serial primary key
   content -- text (280 character limit)
   createdAt -- timestamp
   postedAt -- timestamp
   deletedAt -- timestamp nullable
   type = ['post' | 'repost' | 'reply']
   userId -- bigint foreign key
   referenceId -- bigint foreign key nullable // postid of another post....

3. Media
   id -- bigint serial primary key
   postId -- bigint foreign key
   index -- int
   url -- string
   type -- string ("video", "image" | "gif")

4. Follow
   id -- bigint serial primary key
   followerId -- bigint foreign key of user table
   followingId -- bigint foreign key of user table
   timestamp -- timestamp

5. Like
   id -- bigint serial primary key
   userId -- bigint foreign key of user table
   postId -- bigint foreign key of post table
   timestamp -- timestamp
