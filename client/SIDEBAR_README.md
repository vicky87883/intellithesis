# IntelliThesis Sidebar Component

A modern, responsive sidebar component built with Next.js, TypeScript, and Tailwind CSS, inspired by professional dashboard designs.

## Features

### ✅ **Core Functionality**
- **Fixed Vertical Layout**: Full-height sidebar with proper positioning
- **Logo & Branding**: Customizable logo area with brand name
- **Navigation Menu**: Clean, organized navigation with icons and labels
- **Active Link Highlighting**: Visual feedback for current route
- **Collapsible Design**: Toggle between expanded and collapsed states
- **Responsive Behavior**: Mobile-friendly with overlay and hamburger menu

### ✅ **Design & Styling**
- **Professional Appearance**: Clean, modern design inspired by TailUX
- **Dark Mode Support**: Full dark theme compatibility
- **Smooth Animations**: CSS transitions for all interactions
- **Hover Effects**: Interactive feedback on all clickable elements
- **Tooltips**: Helpful tooltips when sidebar is collapsed

### ✅ **Technical Features**
- **TypeScript**: Fully typed for better development experience
- **Next.js Integration**: Uses Next.js `Link` component for navigation
- **Heroicons**: Professional icon set from Heroicons
- **Tailwind CSS**: Utility-first styling approach
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Component Structure

```
Sidebar/
├── Mobile Menu Button (hamburger)
├── Mobile Overlay
└── Sidebar Container
    ├── Logo Section
    │   ├── Logo Icon
    │   ├── Brand Name
    │   └── Collapse Toggle
    ├── Navigation Menu
    │   └── Navigation Items (with icons & labels)
    └── User Section
        └── User Info (collapsed/expanded states)
```

## Usage

### Basic Implementation

```tsx
import Sidebar from '@/components/layout/Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
```

### With DashboardLayout

```tsx
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1>Dashboard Content</h1>
        {/* Your page content */}
      </div>
    </DashboardLayout>
  );
}
```

## Navigation Configuration

The sidebar navigation is configured in the `Sidebar.tsx` component:

```tsx
const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Documents', href: '/documents', icon: DocumentTextIcon },
  { name: 'Research Papers', href: '/research', icon: AcademicCapIcon },
  { name: 'AI Conversations', href: '/conversations', icon: ChatBubbleLeftRightIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];
```

## Features Breakdown

### 1. **Sidebar Structure**
- ✅ Fixed vertical sidebar on the left
- ✅ Full height of the screen
- ✅ Logo area with image and text label
- ✅ Vertical navigation menu with links
- ✅ Icons and text labels for each link

### 2. **Active Link Highlighting**
- ✅ Different background color for active links
- ✅ Different text color for active links
- ✅ Border styling for active state
- ✅ Smooth transitions between states

### 3. **Sidebar Collapse**
- ✅ Toggle button to collapse/expand
- ✅ Icons-only view when collapsed
- ✅ Text labels hidden in collapsed mode
- ✅ Tooltips for collapsed state
- ✅ Smooth animation transitions

### 4. **Styling**
- ✅ Tailwind CSS utility classes
- ✅ Light and dark mode support
- ✅ Hover effects on all interactive elements
- ✅ Rounded corners for active/hover states
- ✅ Professional color scheme

### 5. **Responsive Behavior**
- ✅ Mobile hamburger menu
- ✅ Overlay for mobile navigation
- ✅ Touch-friendly interactions
- ✅ Proper z-index management

## Available Pages

The sidebar includes navigation to these pages:

1. **Dashboard** (`/dashboard`) - Main overview page
2. **Documents** (`/documents`) - Document management
3. **Research Papers** (`/research`) - Academic papers
4. **AI Conversations** (`/conversations`) - Chat interface
5. **Settings** (`/settings`) - User preferences

## Customization

### Adding New Navigation Items

To add a new navigation item:

1. Import the desired icon from Heroicons:
```tsx
import { NewIcon } from '@heroicons/react/24/outline';
```

2. Add to the navigation array:
```tsx
const navigation: NavItem[] = [
  // ... existing items
  { name: 'New Page', href: '/new-page', icon: NewIcon },
];
```

### Styling Customization

The component uses Tailwind CSS classes that can be easily customized:

- **Background**: `bg-white dark:bg-gray-900`
- **Active Link**: `bg-indigo-100 dark:bg-indigo-900/50`
- **Active Text**: `text-indigo-600 dark:text-indigo-400`
- **Hover Effects**: `hover:bg-gray-100 dark:hover:bg-gray-800`

### Logo Customization

Replace the SVG logo in the logo section:

```tsx
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
  {/* Replace with your logo */}
  <YourLogo className="w-5 h-5 text-white" />
</div>
```

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

## Future Enhancements

Potential improvements for the sidebar:

1. **User Profile Integration**: Connect with actual user data
2. **Dynamic Navigation**: Server-side navigation configuration
3. **Search Functionality**: Add search within navigation
4. **Custom Themes**: Multiple color scheme options
5. **Animation Variants**: Different animation styles
6. **Nested Navigation**: Support for sub-menu items

## Troubleshooting

### Common Issues

1. **Icons not showing**: Ensure `@heroicons/react` is installed
2. **Styling issues**: Check Tailwind CSS configuration
3. **Mobile menu not working**: Verify z-index values
4. **Active link not highlighting**: Check route matching logic

### Debug Tips

- Use browser dev tools to inspect element states
- Check console for any JavaScript errors
- Verify Tailwind classes are being applied
- Test on different screen sizes

---

This sidebar component provides a solid foundation for any dashboard application with professional styling and excellent user experience. 