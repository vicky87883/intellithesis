# IntelliThesis Top Navbar Component

A modern, responsive top navbar component built with Next.js, TypeScript, and Tailwind CSS, designed to complement the sidebar and provide essential navigation and user interface elements.

## Features

### ✅ **Core Functionality**
- **Fixed Position**: Sticky navbar that stays visible when scrolling
- **Page Title Display**: Dynamic page title in the left section
- **Search Bar**: Full-featured search input with icon
- **Dark/Light Mode Toggle**: Theme switching with localStorage persistence
- **Notifications System**: Bell icon with badge and dropdown
- **User Profile Menu**: Avatar with dropdown menu
- **Settings Access**: Quick access to settings page

### ✅ **Design & Styling**
- **Professional Appearance**: Clean, modern design inspired by TailUX
- **Dark Mode Support**: Full dark theme compatibility
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: CSS transitions for all interactions
- **Hover Effects**: Interactive feedback on all clickable elements

### ✅ **Technical Features**
- **TypeScript**: Fully typed for better development experience
- **Next.js Integration**: Uses Next.js `Link` component for navigation
- **Heroicons**: Professional icon set from Heroicons
- **Tailwind CSS**: Utility-first styling approach
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Component Structure

```
TopNavbar/
├── Left Section
│   ├── Page Title
│   └── Search Bar
└── Right Section
    ├── Theme Toggle
    ├── Notifications (with dropdown)
    ├── Settings Link
    └── User Profile (with dropdown)
```

## Usage

### Basic Implementation

```tsx
import TopNavbar from '@/components/layout/TopNavbar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavbar pageTitle="Dashboard" />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### With DashboardLayout

```tsx
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="p-6">
        <h1>Dashboard Content</h1>
        {/* Your page content */}
      </div>
    </DashboardLayout>
  );
}
```

## Features Breakdown

### 1. **Navbar Layout**
- ✅ Full-width horizontal navbar at the top
- ✅ Fixed position (sticky) so it stays visible when scrolling
- ✅ Left section with page title and search bar
- ✅ Right section with theme toggle, notifications, settings, and user profile

### 2. **Dark and Light Mode**
- ✅ Toggle button to switch between dark and light themes
- ✅ Uses Tailwind CSS `dark:` classes for styling
- ✅ Stores user's theme preference in `localStorage`
- ✅ Persists across sessions
- ✅ System theme detection on initial load

### 3. **Search Bar**
- ✅ Rounded design with subtle border and padding
- ✅ Inline search icon (MagnifyingGlassIcon)
- ✅ Expands to fill available space in the navbar
- ✅ Responsive behavior on smaller screens
- ✅ Focus states with ring styling

### 4. **Notifications**
- ✅ Bell icon with badge showing number of unread notifications
- ✅ Click to show dropdown list of notifications
- ✅ Different notification types (success, info, warning, error)
- ✅ Read/unread state styling
- ✅ "View all notifications" link

### 5. **User Profile**
- ✅ Circular avatar image with gradient background
- ✅ Click to show dropdown menu
- ✅ Menu items: View Profile, Settings, Logout
- ✅ Proper hover states and transitions

### 6. **Responsive Design**
- ✅ On small screens, search bar remains functional
- ✅ Navbar remains accessible and functional
- ✅ All elements properly aligned horizontally and vertically
- ✅ Mobile-friendly touch targets

### 7. **Styling**
- ✅ Tailwind CSS for all styling
- ✅ Background: `bg-white` (light) and `dark:bg-gray-900` (dark)
- ✅ Text: `text-gray-700` (light) and `dark:text-gray-200` (dark)
- ✅ Hover and active states with clear visual feedback
- ✅ Soft shadows and subtle borders

## Props Interface

```tsx
interface TopNavbarProps {
  pageTitle?: string;    // The page title to display
  className?: string;    // Additional CSS classes
}
```

## Notifications System

The navbar includes a comprehensive notifications system:

```tsx
interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}
```

### Dummy Notifications Data

The component includes example notifications:
- Document Analysis Complete (success)
- New AI Conversation (info)
- Upload Successful (success)
- System Update (info)

## Theme Management

The navbar handles theme switching with the following features:

1. **System Theme Detection**: Automatically detects user's system preference
2. **localStorage Persistence**: Saves user's choice across sessions
3. **Smooth Transitions**: CSS transitions for theme changes
4. **Icon Changes**: Different icons for light/dark mode

```tsx
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};
```

## Dropdown Management

The navbar includes sophisticated dropdown management:

1. **Click Outside to Close**: Automatically closes dropdowns when clicking outside
2. **Proper Z-Index**: Ensures dropdowns appear above other content
3. **Smooth Animations**: CSS transitions for dropdown appearance
4. **Keyboard Navigation**: Proper focus management

## Customization

### Adding New Navigation Items

To add new items to the right section:

```tsx
// Add new button in the right section
<button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
  <YourIcon className="h-5 w-5" />
</button>
```

### Styling Customization

The component uses Tailwind CSS classes that can be easily customized:

- **Background**: `bg-white dark:bg-gray-900`
- **Border**: `border-gray-200 dark:border-gray-700`
- **Text**: `text-gray-900 dark:text-white`
- **Hover Effects**: `hover:bg-gray-100 dark:hover:bg-gray-800`

### Search Functionality

To implement actual search functionality:

```tsx
const handleSearch = (query: string) => {
  // Implement your search logic here
  console.log('Searching for:', query);
};

// Add to the search input
onChange={(e) => {
  setSearchQuery(e.target.value);
  handleSearch(e.target.value);
}}
```

## Integration with Sidebar

The navbar is designed to work seamlessly with the sidebar:

1. **Proper Spacing**: Accounts for sidebar width
2. **Consistent Styling**: Matches sidebar design language
3. **Theme Synchronization**: Both components use the same theme system
4. **Responsive Behavior**: Works together on mobile devices

## Technical Details

### Dependencies
- `@heroicons/react` - Icon library
- `next/navigation` - Next.js navigation utilities
- `tailwindcss` - Styling framework

### Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Mobile browsers with touch event support
- Responsive design for all screen sizes

### Performance
- Optimized with CSS transitions
- Minimal JavaScript for interactions
- Efficient re-renders with React hooks
- Proper event handling and cleanup

## Accessibility

- ✅ Proper ARIA labels
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader compatibility
- ✅ High contrast mode support
- ✅ Touch-friendly targets

## Future Enhancements

Potential improvements for the navbar:

1. **Real-time Notifications**: WebSocket integration for live notifications
2. **Search Suggestions**: Autocomplete functionality
3. **User Avatar**: Integration with actual user profile images
4. **Breadcrumbs**: Navigation breadcrumbs for complex pages
5. **Quick Actions**: Contextual quick action buttons
6. **Keyboard Shortcuts**: Hotkeys for common actions

## Troubleshooting

### Common Issues

1. **Theme not persisting**: Check localStorage implementation
2. **Dropdowns not closing**: Verify click outside handler
3. **Icons not showing**: Ensure `@heroicons/react` is installed
4. **Styling issues**: Check Tailwind CSS configuration

### Debug Tips

- Use browser dev tools to inspect element states
- Check console for any JavaScript errors
- Verify Tailwind classes are being applied
- Test on different screen sizes
- Check theme persistence in localStorage

---

This navbar component provides a solid foundation for any dashboard application with professional styling, excellent user experience, and seamless integration with the sidebar component. 