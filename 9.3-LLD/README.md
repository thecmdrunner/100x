# Low-Level Design for the Frontend of Microblogging Platform Twitter Clone (100x)

## A. Requirements

### 1. Core Features

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

### 2. Requirements for Mobile Responsiveness and Accessibility

1. The website should scale well on smaller screens (mobile devices, etc.).
2. The website should be accessible to users with disabilities, using screen readers, etc. This includes the use of semantic HTML elements, `alt` text for images, using `aria-hidden` for decorative images elements, etc.
3. Links in `<a>` elements should be descriptive and not use generic text like "click here", "submit", etc.
4. Buttons should have `aria-label` attributes to describe their purpose.
5. The website should be fully navigable when using only a keyboard.
6. Buttons and Links should have `focus` styles and be visually distinct by not relying on color alone to convey their meaning.
7. Multimedia content should have captions and/or transcripts.
8. Website should have a dark mode.

## B. React Components Breakdown

### 1. **Header**

- The header component has different states depending on the page the user is on.
- On the home page, the header component will contain the 100x logo, and the user avatar.
- If the user is not logged in, the header will contain only the 100x logo.
- If the user is on a page other than the home page, the header will contain the page name, and a back/close button.

### 2. **Footer**

- The footer component will contain a Home Feed button, that will redirect the user to the home page, and a User Profile button, that will redirect the user to their profile page.

- This footer will only be displayed on the Home Page, at the bottom of the page.

### 3. **Button**

- The `<Button>` component will be used for all buttons on the website.

- The `<Button>` component will have different styles depending on the variant, size, and whether the button is disabled or not.

- The Button accepts all other props that the native HTML button element accepts, via the spread operator.

### 4. **Input**

- The `<Input>` component will have a consistent look for each purpose it is used for.
- For example, the `<Input>` component will have a Material UI look for the signup form, and a flat look everywhere else.

### 5. **Post Card**

- The `<PostCard>` component will be used to display a post on the home feed, and on the user's profile page.

- It accept post's data as props, and displays the post's content, its author.

- It will also display the number of _likes_, _comments_, and _reposts_ the post has, which are clickable buttons and can change colors based on whether the user has liked, commented, or reposted the post.

### 6. **Tabs**

- The `<Tabs>` component will display the **For You**, and **Following** tabs on the Home feed page.

## C. **State Management**

- For state management, we will use Context API built into React, to share states between components without having to pass props manually at every Component level.

- There will be two Contexts:

  - **AuthContext**: Contain the user's authentication state, and the functions to update the authentication state. We will also store user's information in this context (username, avatar image url, etc.)

  - **PostsContext**: This context will contain the posts for the global home feed, and the posts created by the user. We will also store the functions to create and update the posts in this context.

## D. **Routing**

- We will use React Router to handle routing for the website.
- To handle private routes, which should be accessible only to authenticated users, we will use a custom `PrivateRoute` component that will redirect the user to the login page if they are not logged in.
- The website will have the following routes:
  - Landing Page (`/`) - This has the 100x banner and the login + signup buttons
  - Login Page - where users need to login before accessing the website
  - Signup Page - where users can create an account
  - User Profile Page (`/:username`) - where users can view their own profile, or someone else's.
  - Post Page (`/post/:postId`) - where users can view a post, and its comments. This is where the `<PostCard>` component will be mounted. Some Posts may belong to private accounts, and will not be visible to users who are not following the author of the post.
  - Home Feed Page (`/feed`) - where users can view posts from users they are following, and posts from themselves. This is where the `<PostCard>` component will be mounted.

## E. **Error Handling and User Feedback**:

Loading states are tricky, but essential to have a good UX.

Since we are using the web standard fetch API to get the data from our server, we can wrap the fetch call in an asynchronous function that updates the loading states for us.

```tsx
const getData = async ({ URL }) => {
  setIsLoading(true);

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Couldn't fetch data!");
    }

    return await res.json();
  } catch (err) {
    alert(err?.message ?? "Something went wrong!");
  } finally {
    setIsLoading(false);
  }
};
```

The `getData` function returns a promise for parsing the response to JSON only when we are sure that the response status was in the range of 200 (`res.ok` is a shorthand alias just for this, built into the fetch API).

When the function is invoked, we set the loading state to true.

Regardless of what the outcome is, success or error, we set the loading state to false.

We can also extend this function by passing optional onSuccess and onError callbacks, to show a custom toast message to the user, instead of an `alert()` for a better UX.

As for showing the loading state in the UI, we can subscribe to the isLoading state to programatically show changes in the UI.

Here's a simple example of the Compose Tweet Component:

```tsx
function ComposeTweet() {
  const [isLoading, setIsLoading] = useState(false);
  const [tweetContent, setTweetContent] = useState("");

  const handlePostTweet = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(BACKEND_URL + "/api/tweet", {
        method: "POST",
        body: JSON.stringify({ content: tweetContent }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      setTweetContent("");
      alert("Tweet posted successfully!");
    } catch (err) {
      alert(err?.message ?? "Could not post tweet!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostTweet();
      }}
    >
      <input
        type="text"
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      />

      <button>{isLoading ? "Posting..." : "Post"}</button>
    </form>
  );
}
```

Of course, there are other ways to tackle this problem, and this is only a basic example.

Typically, you'd also include:

- Caching when querying data from the server.
- Client side validation when mutating data - for example, 280 character limit.
- Automatic retries for devices with shotty internet.
- Optimistic updates - updating the UI before the server responds with the updated data.

  For example, when liking a post, we can update the UI to show that the post has been liked, and then send the request to the server. If the request fails, we can revert the UI back to its original state.

## F. **Optimization**

Since we're using Vite, we can leverage some features that will result in a smaller initial JS bundle size that gets sent to the user:

- Lazy Loading: We can defer loading of components that are not immediately going to be seen by the user, and hence are not to be prioritized. For example, the `<ProfileHeader>` component can be lazyily imported in our code, and it will be loaded at the point when the user visits the `/profile` page. This reduces initial load time and saves bandwidth for unseen content.

```tsx
import React, { lazy, Suspense } from "react";

const ProfileHeader = lazy(() => import("./ProfileHeader"));

function ProfilePage() {
  return (
    <>
      {/* Wrap the lazy component within a Suspense, which is the React 18 way! */}
      <Suspense fallback={<div className="h-full w-full grow">Loading...</div>}>
        <ProfileHeader />
      </Suspense>

      {userTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}
```

- Since this platform will have a ton of images (user avatars, post images, etc.), we could use **Cloudinary** to optimize images on the cloud before serving them to the user. This will reduce the size of the images, and hence reduce the bandwidth required to load the images.

- Code Splitting: We can split our UI Components and hooks into modular chunks, in order to make sure that only the code that is required for a particular page is imported.

- Minification and Compression: We can use the new SWC compiler to minify our code, and use gzip compression to reduce the size of the bundle that is sent to the user. This is relatively new and is supported by Vite.

- Switch to Next.js: We can switch to React Server Components available in Next.js, to reduce the size of the initial JS bundle even further. This is because RSCs are rendered on the server, and only the HTML is sent to the user, instead of the entire JS bundle. This has some added benefits:

  - Faster Perceived Performance
  - Better SEO
  - No need to fetch data on the client side, since the data is sent from the server itself.
