# Low-Level Design for the Frontend of Microblogging Platform Twitter Clone (100x)

## 1. Requirements

### A. Core Features

1. Users can **create** an account with a unique username and password.
2. Users can create a **post** with a maximum of 280 characters.
3. Users can **follow** other users.
4. Users can **like** other users' posts.
5. Users can **comment** on other users' posts.
6. Users can **share** other users' posts.
7. Users can **search** for posts created by other users and themselves.
8. Users can **view** profiles of other users and themselves.
9. Users can **view** posts made by other users if they are following them.
10. All posts are **displayed** in a reverse chronological timeline.

### B. Requirements for Mobile Responsiveness and Accessibility

1. The website should scale well on smaller screens (mobile devices, etc.).
2. The website should be accessible to users with disabilities, using screen readers, etc. This includes the use of semantic HTML elements, `alt` text for images, using `aria-hidden` for decorative images elements, etc.
3. Links in `<a>` elements should be descriptive and not use generic text like "click here", "submit", etc.
4. Buttons should have `aria-label` attributes to describe their purpose.
5. The website should be fully navigable when using only a keyboard.
6. Buttons and Links should have `focus` styles and be visually distinct by not relying on color alone to convey their meaning.
7. Multimedia content should have captions and/or transcripts.
8. Website should have a dark mode.

## 2. React Components Breakdown

### 1. **Header**

- The header component has different states depending on the page the user is on.
- On the home page, the header component will contain the 100x logo, and the user avatar.
- If the user is not logged in, the header will contain only the 100x logo.
- If the user is on a page other than the home page, the header will contain the page name, and a back/close button.

### 2. **Footer**

- The footer component will contain a Home Feed button, that will redirect the user to the home page, and a User Profile button, that will redirect the user to their profile page.

- This footer will only be displayed on the Home Page, at the bottom of the page.

### 3. **State Management**

<!-- Choose a suitable state management solution (Context API, etc.) -->
<!-- Design the state structure and actions for managing the application state. -->

- For state management, we will use Context API built into React, to share states between components without having to pass props manually at every Component level.

- There will be two Contexts:

  - **AuthContext**: Contain the user's authentication state, and the functions to update the authentication state. We will also store user's information in this context (username, avatar image url, etc.)

  - **PostsContext**: This context will contain the posts for the global home feed, and the posts created by the user. We will also store the functions to create and update the posts in this context.
