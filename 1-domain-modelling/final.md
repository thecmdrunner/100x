# PA - 1

## Entities and their Attributes & Constraints

## 1. Book

### Attributes:

- original name
- originally published at
- description
- quotes count
- reviews count
- ratings count
- discussions count
- questions count
- editions count
- overall rating
- setting

### Constraints:

- A Book must have at least 1 edition (could be the one and only).
- A Book must have at least 1 author.

## 2. Book Edition

### Attributes:

- ISBN (unique)
- name
- edition no. (by default #1)
- cover image
- published at

### Constraints:

- A book edition must have a unique ISBN.

## 3. Series

### Attributes:

- Author (owned by)
- name
- description
- total books (minimum 1)

### Constraints:

- A series must have an author.
- A series must have at least 1 book.

## 4. Author

### Attributes:

- name
- image
- total books written (minimum 1 constraint)
- birth place
- birth date
- death date
- description
- gallery
- social media links
- join date
- verified
- follower count
- average rating determined by their books

### Constraints:

- An Author must have at least one of their books listed on GoodReads.com, in order to be recognized as an "Author" on GoodReads.

## 5. Book Review

### Attributes:

- User
- content
- likes
- star rating
- timestamp

### Constraints:

- User must have read the book before writing the review.
- User can submit only one review per book.
- User must be signed in to write a review.

## 6. User (the reader)

### Attributes:

- name
- email (unique)
- image
- join date
- verification
- TODO: pending,admin verified, OAuth verified, etc.
- follower count
- reviews written count

### Constraints:

- User must be signed in to open a discussion topic.

## 7. Discussion Topic

### Attributes:

- title
- views
- created at
- last activity at

### Constraints:

- User must be signed in to open a discussion topic.

## 8. Comment (To a Book Review, or an Answer)

### Attributes:

- User
- content
- timestamp

### Constraints:

- User must be signed in to write a comment.

## 9. Question

### Attributes:

- User
- Book
- content
- likes
- is officially answered
- views
- is flagged
- timestamp
- total answers

### Constraints:

- A question can only be related to a book.
- User must be signed in to ask a question.

## 10. Answer

### Attributes:

- answer to (question)
- content
- likes
- timestamp
- is official answer

### Constraints:

- Obviously an answer can't exist without a question.
- User must be signed in to answer a question.

## 11. Quote (From a Book)

### Attributes:

- author name
- book name
- content
- likes
- tags

### Constraints:

- A quote can't exist without a book.
- A quote can't exist without an author.

## 12. Award (Received by a Book)

### Attributes:

- name
- description
- year

### Constraints:

- An award can't exist without a year.

## 13. Genre (For a Book, or an Author)

### Attributes:

- name
- description
- total books

### Constraints:

- A genre can't exist without a book or an author.

## 14. Tag (Category for a Book or Quote, but added by the community)

### Attributes:

- name

## 15. Reading List (Belongs to a User)

### Attributes:

- name (vacation, paternity-leave, etc.)
- books count
- books list
- updated at

### Constraints:

- Reading list must have at least one book.
- User must be signed in to create a reading list.

## 16. Reading Progress (belongs to a book owned by the user)

### Attributes:

- progress (not yet started, started, finished, stopped)
- timestamp

### Constraints:

- User must have the book added in their account, before they can report progress for that particular book.
- User must be signed in to report progress for a book.

# Relationships between Entities

## Book

Book <-> Edition
1-Many relationship (at least one)
A book can have multiple editions.

Book <-> Series
1-Many relationship (minimum zero)
A book may be part of a series.

Book <-> Author
1-Many relationship (at least one)
A book can have more than one author.

Book <-> Book Review
1-Many relationship (minimum zero)
A book can have many reviews, or none.

Book <-> Discussion Topic
1-Many relationship (minimum zero)
There can be multiple discussion topics about a book, or none.

Book <-> Question
1-Many relationship (minimum zero)
Readers can ask multiple questions about a book, or none.

Book <-> Quote
1-Many relationship (minimum zero)
Multiple quotes can be taken from the same book.

Book <-> Award
1-Many relationship (minimum zero)
A book can win multiple awards.

Book <-> Genre
1-Many relationship (minimum zero)
A book can have multiple genres.

Book <-> Tag
1-Many relationship (minimum zero)
A book can have multiple tags.

Book <-> Reading List
1-Many relationship (minimum zero)
A book can be in the reading lists of multiple users.

## Book Edition

Book Edition <-> Book
Many-1 relationship (at least one)
A book edition can only belong to one book.

## Author

Author <-> Book
Many-1 relationship (at least one)
An author can write multiple books (at least one).

Author <-> Series
Many-1 relationship (minimum zero)
An author can write multiple series.

Author <-> Genre
Many-1 relationship (minimum zero)
An author can have multiple genres associated with them.

## Series

Series <-> Book
Many-1 relationship (at least one)
A series can have multiple books.

Series <-> Author
Many-1 relationship (at least one)
A series can have multiple authors.

## Book Review

Book Review <-> Book
Many-1 relationship
A review can be about ONLY one book.

Book Review <-> User
Many-1 relationship
A review can be written by ONLY one user.

## Discussion Topic

Discussion Topic <-> Book
Many-1 relationship
A discussion topic can be about ONLY one book.

Discussion Topic <-> User
Many-1 relationship (minimum zero)
A discussion topic can be started by ONLY one user.

Discussion Topic <-> Comment
Many-1 relationship (minimum zero)
A discussion topic can have multiple comments (or none).

## Question

Question <-> Book
Many-1 relationship
A question can be about ONLY one book.

Question <-> User
Many-1 relationship
A question can be asked by ONLY one user.

## Answer

Answer <-> Question
Many-1 relationship
An answer can be for ONLY one question.

Answer <-> User
Many-1 relationship
An answer can be written by ONLY one user.

Answer <-> Comment
Many-1 relationship (minimum zero)
An answer can have multiple comments.

## Quote

Quote <-> Book
Many-1 relationship
A quote can be from ONLY one book.

Quote <-> Tag
Many-1 relationship (minimum zero)
A quote can have multiple tags (or none).

## Award

Award <-> Book
Many-Many relationship (minimum zero)
An Award can be won by multiple books, or none.

## Genre

Genre <-> Book
Many-Many relationship (minimum zero)
A genre can be associated with multiple books (or none).

Genre <-> Author
Many-Many relationship (minimum zero)
A genre can be associated with multiple authors (or none).

## Tag

Tag <-> Book
Many-Many relationship
A tag can be associated with multiple books.

Tag <-> Quote
Many-Many relationship
A tag can be associated with multiple quotes (at least one).

## Reading List

Reading List <-> Book
Many-Many relationship (minimum one)
A reading list can have multiple books.

Reading List <-> User
Many-1 relationship
A reading list can only belong to one user.

## User

User <-> Book
Many-Many relationship (minimum zero)
A user can have multiple books in their account (or none).

User <-> Book Review
Many-1 relationship (minimum zero)
A user can write multiple book reviews (or none).

User <-> Discussion Topic
Many-1 relationship (minimum zero)
A user can start multiple discussion topics.

User <-> Question
Many-1 relationship (minimum zero)
A user can ask multiple questions about a book.

User <-> Reading List
Many-1 relationship (minimum zero)
A user can create multiple reading lists.

User <-> Answer
Many-1 relationship (minimum zero)
A user can answer multiple questions.

User <-> Comment
Many-1 relationship (minimum zero)
A user can comment on multiple discussion topics or answers.

User <-> Reading Progress
Many-1 relationship (minimum zero)
A user can have multiple reading progress entries.

## Reading Progress

Reading Progress <-> User
Many-1 relationship
A reading progress entry can only belong to one user.

Reading Progress <-> Book
Many-1 relationship
A reading progress entry can only be about one book.

## Comment

Comment <-> Discussion Topic
Many-1 relationship
A comment can only be under one discussion topic.

Comment <-> Book Review
Many-1 relationship
A comment can only be under one book review.

Comment <-> Answer
Many-1 relationship
A comment can only be under one answer.

Comment <-> User
Many-1 relationship
A comment can only be written by one user.

# Actions

## User
