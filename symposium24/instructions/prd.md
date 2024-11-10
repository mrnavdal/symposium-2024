# Project Overview

Web application for displaying a schedule of lectures and workshops with information about the speakers and links to external pages.

## 1.1 Tech Stack

- Next.js
- Tailwind CSS
- Lucide icons
- Shadcn/ui components
- Framer Motion for animations
- React Big Calendar for schedule display

## 2. Core Functionalities

### 2.1 Home Page

- Display text with emphasis on readability
- Display images
- Data loaded from local JSON files and PNG images

### 2.2 Schedule

- Implemented using React Big Calendar
- Three event types (workshop, lecture, networking) with different colors
- Highlight current event
- Dim past events
- Preview includes: location, time, speaker
- Event detail includes: description, speaker link, photos, and additional information

### 2.3 Responsive Navigation

- Mobile: Bottom navigation bar
- Desktop: Side navigation menu
- Breakpoint for switching defined in Tailwind config

### 2.4 Design and Animation

- Focus on visual appeal
- Use Framer Motion for smooth transitions
- Consistent color scheme defined in Tailwind config

### 2.5 External Links

- Instagram and LinkedIn on the home page
- Slido for panel discussion
- Google Forms for feedback

## 3. Application Structure

### 3.1 Pages

- Home (intro)
  - Hero section with image
  - Social media links
- Schedule (calendar)
- Networking
- Panel Discussion
- Feedback

### 3.2 File Structure

```
src/
├── app/
│   ├── layout.tsx              # Main application layout
│   ├── page.tsx               # Home page (intro)
│   ├── schedule/
│   │   └── page.tsx           # Schedule page
│   ├── networking/
│   │   └── page.tsx           # Networking page
│   ├── discussion/
│   │   └── page.tsx           # Panel discussion page
│   └── feedback/
│       └── page.tsx           # Feedback page
├── components/
│   ├── Navigation.tsx         # Responsive navigation component
│   ├── Calendar.tsx           # Calendar component
│   └── SpeakerCard.tsx        # Speaker information component
├── data/
│   ├── events.ts              # Event data for the calendar
│   ├── speakers.ts            # Speaker data
│   └── content.ts             # General page content
└── styles/
    └── calendar.css           # Styles for the calendar
```

## 4. Implementation Guidelines

### 4.1 Calendar

Use React Big Calendar with the following basic configuration:

```typescript
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Basic calendar implementation
<Calendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  defaultView="day"
  style={{ height: '100%' }}
/>
```

### 4.2 Data Structure

#### Events

```typescript
interface Event {
  id: string;
  title: string;
  type: 'workshop' | 'lecture' | 'networking';
  start: Date;
  end: Date;
  speaker: string;
  location: string;
  description: string;
}
```

#### Speakers

```typescript
interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}
```

### 4.3 Development Guidelines

- Use TypeScript for all components
- Implement a mobile-first approach
- Utilize Shadcn/ui components for consistent UI
- Implement lazy loading for images
- Optimize performance using Next.js features (Image component, routing)

### 4.4 Responsive Breakpoints

```typescript
// tailwind.config.ts
{
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  }
}
```

## 5. Dependencies

- next
- react
- react-dom
- tailwindcss
- @shadcn/ui
- lucide-react
- framer-motion
- react-big-calendar
- moment

## 6. Performance Requirements

- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Optimized images and assets

## 7. Browser Support

- Modern Evergreen browsers
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Android)