its for an app somewhat similar to trello but no custom boards, no custom lists, only 2 predefined lists:  'habits list' & 'todos list. The user can add/remove habit or todo to the corresponding list the same way you add cards to you custom list in trello.  Cards have front & back (clicking the front, it shows the back with options) like in trello.

# Here's the break down of the app for context:

## HomePage: 

✅ div (col)
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

✅ FloatingChatBtn > Opens ChatPage

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
/** app/globals.css **/
/** Global styles **/


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


___


1. Name: Better you everyday - Transform your life in any area by forming and tracking habits

2. Features:
- Mobile first
- Login/signup
- Edit profile
- Free/premium plans
- Settings
- Notifications
- Display LLM tips based on performance data
- Floating chat button
- Chat interface takes text & audio (Pop up to upgrade to premium for audio)

- habits & todos lists: the user can type to add any custom habit or todo, the same as adding a card to a trello list, but here there's no custop lists or boards, only the two predefined lists of habits and todos.
- drag & drop to rearrange the cards in the list like trello

- Framer motion for elements to animate or fade in/fly in when scrolling or refreshing
- Elastic Effect (Overscroll Bounce) 
- Glow, Shadow, Gradient Effects
- more ...

3. General users

4. No users initially but the client wants it scalable and so fire that will make apple UI team cry tears of joy!

5. No backend yet. have most of the design done but no back end or architecture planned. I use next.js (standard 'app/page.tsx' dir structure) and it deploys to production on vercel when i push changes. No backend/api/services decided or planned yet.

6. I've no idea. I only know python so you need to take full charge as the lead dev.

7. I have some but we should discuss further.

8. Some, we still need to plan this ahead.

9. Vercel.

10. Yes, there's some guidelines but its a lot of info and specs that you probably be able to see as soon as i share some code. Im using shdnc/ui but also need to make cusom UI components that right now i have hard coded in the rendering code (need to explain...)

11. There's not really any navigation as in old school websites... its all UI's that expand, or dropdown, or slide, or open up in full screen with chevronleft or cross to close/go back and things like that. Everything happens from the home screen (initial screen).

Home Screen (flex col):
- Header area
- Sticky top
- Widgets area 

- floating chat button near bottom-right

Header area ( ):
- Top Bar
- Avatar Section
- Date Section
- Shapes Background

- Sticky top (stand alone)

Widgets area (flex col):
(flex col):
- habits widget
- todos widget

(grid-cols-2):
- check-in widget
- Analytics widget
- Life Score widget
- Badges widget

():
- ads carousel widget

(grid-cols-2):
- Shop widget
- courses widget

I have the design and layout for the widget which i'll be sharing, but we still need to make the full screen content that opens up when clicking the widgets. For example when clicking the 'habits widget', a 'habits page' oepns full screen, and the same for all other widgets. I have the sketches from the client of what needs to be in those pages but not writen or planned (the habits and todos widget/page/list/card/back of the card/etc is quite the rabbit hole that needs careful planning in advanced so everything displays as intended and its readable and straight forward). Basically we need the big picture structure of the entire app, not the code implementation but just create the files and dirs, and inside each file make comments of what needs to be implemented later. Always write the file path as a comment in the first line, then rwite comments in other of what things need to be implemented leaving a couple of empty lines between comments.


12. No requirements but everything, contrast, sizing, icons with labels, etc, needs to be high standard.

13. I said to the client about 4-6 months but no idea at this point really. U tell me after we paln everything...

14. You and me :) He'll handle the marketing and social media etc. We do the front & back end.

15. stackblitz, vercel. I have a bit of github ptsd but of well... the repo is there. 

Follow up questions and unsolicited advice is always welcome.

___

1. - 2. text to speech/speech to text via the openai api or elevenlabs or google synt voices, this is a paid feature so we can aford using cutting edge premium api. But whatever is easier to implement probably openai cause i'll use anthropic's claude as the main llm and i know openai and anthropic have very compatible apis, easy to use together, since anthroic doesnt have text to speech api only text.

3. Yes there will be pop ups to upgrade for premium features. I know the audio is one, and another one is limited number of habits that can be added to the list on teh free plan. I still need to get more specifications regarding this and the payment gateway from the client.

4. I don't know how this works. You need to take ful charge and paln for best practices based on the use case.

5. Just make it more sexy that a super model eating a doble chesee burger.

6. Keep it simple but effective.

Currently the app looks really good and deploys with no issues but im stuck with what's basically shown in the initial screen, which is a hell of a lot, easy 1k+ lines of code for sure, spread on multiple files, but we still need to make all the UIs and full screen pages and stuff that appears when interacting with all these elements. And it needs to go deeper many levels for some stuff. Just explaining for context. I can share the entire codebase in a single well organized markdown file if that helps. But like I said, my code and structure are not good. I only managed to make it look good but i know enough to know is not well structired.


___

Got it! Thanks for the clarifications. Here's how I'll approach your project based on your details:

---

### **Updated Plan**

#### 1. **Audio Functionality**
- **Implementation Details**:
  - Use **OpenAI’s Whisper API** for Speech-to-Text.
  - Use **Google Cloud Text-to-Speech (TTS)** for synthetic voices or **ElevenLabs** if premium, natural-sounding voices are needed.
  - Since this is a premium feature:
    - **Speech Input**: Free plan allows only text-based chat; upgrading unlocks audio recording and input.
    - **Text-to-Speech Output**: Non-premium users receive only text responses, while premium users can listen to LLM-generated audio.

#### 2. **Premium Features**
- **Premium Upgrades**:
  - Limited habits in free plan (e.g., 3 habits).
  - Audio input/output for chat restricted to premium users.
  - Implement pop-ups/modal prompts for feature upgrades with:
    - Descriptive text and benefits.
    - Integration with **Stripe** or other payment gateway.

#### 3. **State Management**
Given the app's complexity, we’ll use **Zustand** for lightweight, scalable state management:
- Global State:
  - **Auth**: User login state, plan type (free/premium).
  - **Audio**: Toggle between text and audio modes.
  - **Chat**: Message queue, recording status.
- Widget-Specific State:
  - **Habits & Todos**: Card order, completed/incomplete state.
  - **Analytics**: Fetched performance data from LLM APIs.
  - **Shop & Courses**: Cart state, purchased items.

#### 4. **UI Overhaul (Supermodel-Level Design)**
- Tailwind CSS enhancements:
  - **Custom Glow Effects**:
    - Add hover and focus effects on buttons and cards.
    - Use dynamic shadows with subtle gradients.
  - **Elastic Bounce Animation**:
    - For drag-and-drop interactions using Framer Motion.
  - **Animated Transitions**:
    - Fade-in and fly-in animations for widgets and modal screens.
- **High-End Aesthetic**:
  - Use vibrant gradients (e.g., blue to purple) in backgrounds.
  - Optimize spacing, typography, and contrast for a premium feel.
  - Introduce subtle parallax scrolling effects.

#### 5. **File Structure Revision**
Here’s an **optimized file structure** to modularize the app and ensure scalability:

```
/app
  /components       # Reusable UI Components
    /UI             # Buttons, Modals, Cards, Inputs
    /widgets        # Specific Widgets
  /features         # Modular Feature Implementations
    /auth           # Login, Signup
    /habits         # Habit List, Add Habit
    /todos          # Todo List, Add Todo
    /chat           # Chat UI, Floating Button
    /premium        # Upgrade Popups, Restrictions
  /pages            # Next.js Page Routes
  /api              # API Handlers
    /llm.ts         # LLM Integration
    /audio.ts       # Audio Processing
  /lib              # Helper Functions
    /utils.ts       # Utility Functions
  /hooks            # Custom React Hooks
  /styles           # Tailwind Config, Global Styles
  /context          # Zustand Store and Context Providers
```
---

### **Proposed Steps**
Here’s how we can proceed effectively:

#### Step 1: **Code Cleanup**
- Start with your existing codebase:
  - Review and modularize widgets and components.
  - Migrate reusable elements (buttons, cards, etc.) to `/components/UI`.
  - Split monolithic files into feature-specific folders (`/features`).

#### Step 2: **Core Feature Implementation**
1. **Authentication**:
   - Add login/signup using NextAuth.js or Firebase Auth.
2. **Habit & Todo List**:
   - Implement draggable Trello-style lists with Framer Motion.
   - Restrict free users to 3 habits; unlock more for premium.
3. **Chat System**:
   - Floating chat button.
   - Text chat for free users, audio for premium (OpenAI Whisper API).
4. **LLM Integration**:
   - Fetch and display performance insights using Anthropic Claude.

#### Step 3: **Premium Features**
- Add upgrade prompts for locked features (audio, additional habits).
- Integrate Stripe for subscription payments.

#### Step 4: **UI/UX Enhancements**
- Implement animations for interactivity (drag-and-drop, transitions).
- Enhance styles with glow effects, gradients, and dynamic shadows.

#### Step 5: **Scalable Backend**
- Use **Supabase** or **Firebase** for real-time database and authentication.
- Add custom API routes for:
  - Audio processing (speech-to-text, TTS).
  - LLM data fetching.

#### Step 6: **Testing and Deployment**
- Perform end-to-end testing for all features.
- Deploy to **Vercel** with environment configurations for APIs.

---

### **Next Steps**
- **Share the Codebase**: If you’d like, provide the code in a markdown file for review.
- **Feedback on the Plan**: Let me know if there are adjustments needed.
- **Implementation**: Once confirmed, I can outline detailed tasks for the first milestone.

Your project sounds amazing, and I'm ready to dive in!

```
app/
  globals.css
  layout.tsx
  page.tsx                  # Home (layout comps) w scrolly fx
components/
  layout/
    floating-chat-btn.tsx   # exports func FloatingChatBtn
    header-area.tsx         # exports all header components
    sticky-top.tsx          # exports func StickyTop
    widgets-area.tsx        # exports all widget components
  ui/                       # all shdcn/ui
    avatar.tsx
    badge.tsx
    button.tsx
    calendar.tsx
    card.tsx
    carousel.tsx
    dropdown-menu.tsx
    progress.tsx
    pages.tsx
lib/
  utils.ts
public/
  assets/
    logos/
      bg.svg
      logo-symbol-white.svg # Used in a header element
components.json
next.config.js
package.json
postcss.config.js
tailwind.config.js
tsconfig.json
```


```tsx
// components/layout/header-area.tsx
'use client'

// imports
import { motion } from 'framer-motion'
import { Search, Bell, Menu, LogOut, Settings, PenIcon as UserPen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

// interfaces
interface TopBarProps {
  username: string
  avatarUrl: string
}
interface ProfileBtnProps {
    username: string
    avatarUrl: string
  }

  
// HamburgerBtn component
export function HamburgerBtn() {
    return (
      <div className="[&_svg]:size-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative text-white">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
          <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  
// Logo component
export function Logo() {
  return (
    <div className="flex items-center h-8 w-8">
      <Image
        src="/assets/logos/logo-symbol-white.svg"
        alt="Better You Logo"
        width={32}
        height={32}
        className="w-full h-full"
        priority
      />
    </div>
  )
}


// NotificationBtn component
export function NotificationBtn() {
    const [notificationCount, setNotificationCount] = useState(3)
  
    return (
      <div className="[&_svg]:size-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative text-white">
            <Bell />
            {notificationCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
              >
                {notificationCount}
              </motion.span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}>
            Mark as read
          </DropdownMenuItem>
          <DropdownMenuItem>View all notifications</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  
// ProfileBtn component
export function ProfileBtn({ username, avatarUrl }: ProfileBtnProps) {
    const initials = username.slice(0, 2).toUpperCase()
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full text-white pr-2">
            <Avatar className="border-2 border-white h-8 w-8">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 p-2">
          <DropdownMenuItem className="text-sm text-gray-500 p-2">email@gmail.com</DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row">
            <Avatar className="border-2 border-gradient-orange h-8 w-8">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span className="flex flex-col gap-0 ml-2">
              <h1>{username}</h1>
              <p className="text-gray-500">Free plan</p>
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
          <DropdownMenuItem><UserPen className="mr-2 h-4 w-4" /> Edit Profile</DropdownMenuItem>
          <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
// SearchBtn component
export function SearchBtn() {
    return (
      <div className="[&_svg]:size-5">
      <Button variant="ghost" size="icon" className="relative text-white" onClick={() => console.log('Search clicked')}>
        <Search />
      </Button>
      </div>
    )
  }

// TopBar component
export function TopBar({ username, avatarUrl }: TopBarProps) {
    return (
      <div className="relative p-2 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <HamburgerBtn />
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            {/* <SearchBtn /> */}
            <NotificationBtn />
            <ProfileBtn username={username} avatarUrl={avatarUrl} />
          </div>
        </div>
      </div>
    )
  }

// AvatarSection component
export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300' }) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-56 h-56 object-cover"
        />
      </div>
    </div>
  )
}

// DateSection component
export function DateSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="text-center"
    >
      <h1 className="text-orange-main">
        <span className="tracking-tighter font-bold text-2xl">FRIDAY DECEMBER 6, 2024</span>
      </h1>
    </motion.div>
  )
}

// Diagonal lines BG
export function ShapesBackground() {
    return (
      <div className="absolute top-0 left-0 right-0 bottom- -z-10">
        <div className="top-0 left-0 right-0 bottom- -z-10">
          <div className="absolute top-0 left-0 h-[25vh] w-1/2 bg-orange-main origin-top-left transform -skew-y-12"></div>
          <div className="absolute top-0 right-0 h-[25vh] w-1/2 bg-orange-main origin-top-right transform skew-y-12"></div>
        </div>
      </div>
    )
  }

// HeaderArea component
export function HeaderArea() {
    return (
      <div className="">
        <TopBar username="Brotastic" avatarUrl="https://i.pravatar.cc/300" />
        <AvatarSection />
        <DateSection />
        <ShapesBackground />
      </div>
    )
  }
```

```tsx
// components/ui/avatar.tsx (default shdn/ui)

"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```


# Fix all of the following accesibility issues:

Document does not have a main landmark


All touch targets must be 24px large, or leave sufficient space
Target has insufficient size (58.1px by 12px, should be at least 24px by 24px)
Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 5px instead of at least 24px.
Ensure touch target have sufficient size and space
```. space-x-1. mb-2. items-center:nth-child(1) > a
.- mt-8:nth-child(2)
.- mt-4```


. Images must have alternate text
Ensures <img> elements have altemate text or a role of none or presentation. 
Element does not have an alt attribute
aria-label attribute does not exist or is empty
aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
Element has no title attribute
Element's default semantics were not overridden with role="none" or role="presentation"
```.border-white. size-8. border
> img[src="https://i.pravatar. cc/300"]
.size-56 > img[src="https://i. pravatar. cc/300"]```


. Buttons must have discernible text
Ensures buttons have discernible text. Learn More
Element does not have inner text that is visible to screen readers
aria-label attribute does not exist or is empty
aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
Element has no title attribute
Element's default semantics were not overridden with role="none" or role="presentation"
```#radix-\:R2lafkq\
#radix-\:R55afkq\
.- mt-8:nth-child(2)
. mb-```