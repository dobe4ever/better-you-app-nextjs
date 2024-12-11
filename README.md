its for an app somewhat similar to trello but no custom boards, no custom lists, only 2 predefined lists:  'habits list' & 'todos list. The user can add/remove habit or todo to the corresponding list the same way you add cards to you custom list in trello.  Cards have front & back (clicking the front, it shows the back with options) like in trello.

# Here's the break down of the app for context:

## HomePage: 

### div (col)
- HeaderArea (header elements below):
    - ShapesBG
  - div (col):
    - TopBar
    - AvatarArea
    - StickyTop
___

- WidgetsArea (col):
  - div (col):
    - AnnouncementsWidget 
    - HabitsWidget > Opens HabitsPage
    - TodosWidget > Opens TodosPage
  - div (grid-cols-2):
    - CheckInWidget > and so on...
    - AnalyticsWidget
    - LifeScoreWidget
    - BadgesWidget
  - div (col):
    - AdsWidget
  - div (cols-2):
    - ShopWidget
    - CoursesWidget

### FloatingChatBtn > Opens ChatPage

Yo, bruh! I'll create a directory and file structure for your Trello-like app with the specific requirements you've outlined. This structure will accommodate the HomePage layout you've described, as well as the habits and todos functionality. I'll include setup for login/signup and user data management.

Here's the proposed structure:

```
/app
  /api
    /auth
      /[...nextauth]
        /route.ts  # NextAuth.js API route
    /habits
      /route.ts    # API route for habits CRUD operations
    /todos
      /route.ts    # API route for todos CRUD operations
    /user
      /route.ts    # API route for user data

  /auth
    /login
      /page.tsx    # Login page
    /signup
      /page.tsx    # Signup page

  /habits
    /page.tsx      # Habits list page

  /todos
    /page.tsx      # Todos list page

  /chat
    /page.tsx      # Chat page

  /components
    /layout
      header-area.tsx
      sticky-top.tsx
      header-area.tsx
      floating-chat-btn.tsx
    /widgets
      announcements-widget.tsx
      habits-widget.tsx
      todos-widget.tsx
      check-in-widget.tsx
      analytics-widget.tsx
      life-score-widget.tsx
      badges-widget.tsx
      ads-widget.tsx
      shop-widget.tsx
      courses-widget.tsx
    /ui
      card.tsx     # Reusable card component with front/back functionality
      button.tsx
      input.tsx

  /hooks
    use-habits.ts
    use-todos.ts
    use-user-data.ts

  /lib
    db.ts          # Database connection
    auth.ts        # Authentication utilities

  /types
    index.ts       # TypeScript type definitions

  layout.tsx       # Root layout
  page.tsx         # HomePage

/public
  /images

/styles
  globals.css
```

Now, let's create these files with commented-out file paths at the top:

```tsx
// app/page.tsx
// HomePage component


```

```tsx
// app/layout.tsx
// Root layout component


```


```tsx
// app/api/auth/[...nextauth]/route.ts
// NextAuth.js API route


```

```tsx
// app/api/habits/route.ts
// API route for habits CRUD operations


```

```tsx
// app/api/todos/route.ts
// API route for todos CRUD operations


```

```tsx
// app/api/user/route.ts
// API route for user data


```

```tsx
// app/auth/login/page.tsx
// Login page component


```

```tsx
// app/auth/signup/page.tsx
// Signup page component


```

```tsx
// app/api/auth/[...nextauth]/route.ts
// NextAuth.js API route


```

```tsx
// app/api/habits/route.ts
// API route for habits CRUD operations


```

```tsx
// app/api/todos/route.ts
// API route for todos CRUD operations


```

```tsx
// app/chat/page.tsx
// Chat page component


```

```tsx
// app/habits/page.tsx
// Habits list page component


```

```tsx
// app/todos/page.tsx
// Todos list page component


```


```tsx
// app/components/layout/floating-chat-btn.tsx
// Floating chat button component


```

```tsx
// app/components/layout/header-area.tsx
// Header area component


```

```tsx
// app/components/layout/sticky-top.tsx
// Sticky top component


```

```tsx
// app/components/layout/widgets-area.tsx
// Widget area component
```


```tsx
// app/components/ui/button.tsx
// Reusable button component


```

```tsx
// app/components/ui/card.tsx
// Reusable card component with front/back functionality


```

```tsx
// app/components/ui/input.tsx
// Reusable input component


```

```tsx
// app/hooks/use-habits.ts
// Custom hook for managing habits


```

```tsx
// app/hooks/use-todos.ts
// Custom hook for managing todos


```

```tsx
// app/hooks/use-user-data.ts
// Custom hook for managing user data


```

```tsx
// app/lib/auth.ts
// Authentication utilities


```

```tsx
// app/lib/db.ts
// Database connection utility


```

```tsx
// app/lib/db.ts
// Database connection utility


```

```tsx
/* app/globals.css */
/* Global styles */


```

This structure provides a solid foundation with the specific requirements you've outlined. It includes:

1. Separate pages for habits and todos.
2. A homepage with all the widgets you've specified.
3. Authentication setup (login/signup).
4. API routes for habits, todos, and user data.
5. Reusable components for cards, buttons, and inputs.
6. Custom hooks for managing habits, todos, and user data.
7. Utilities for database connection and authentication.


To implement the functionality:

1. Use the `card.tsx` component to create the habit and todo items with front and back views.
2. Implement the CRUD operations in the API routes.
3. Use the custom hooks (`use-habits.ts` and `use-todos.ts`) to manage the state and interactions with the API.
4. Implement user authentication using NextAuth.js in the `[...nextauth]` route.
5. Create the layout and widgets for the homepage as specified in your breakdown.


Remember to use server components where appropriate, especially for initial data fetching, and client components for interactive elements. This structure should give you a good starting point for building your app.