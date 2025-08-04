# IntelliThesis Client

A modern, responsive web application built with Next.js 15, React 19, and TypeScript for AI-powered thesis writing and research assistance.

## Features

- 🎨 **Modern UI/UX**: Beautiful, responsive design with smooth animations
- 🤖 **AI Chat Interface**: Interactive chat with AI research assistant
- 📁 **Document Upload**: Drag-and-drop file upload with progress tracking
- 📊 **Dashboard**: Comprehensive overview of research activities
- ⚡ **Performance**: Optimized with Next.js 15 and Turbopack
- 🎯 **TypeScript**: Full type safety throughout the application
- 🎭 **Animations**: Smooth transitions with Framer Motion

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with error boundary
│   ├── page.tsx           # Home page
│   ├── dashboard/         # Dashboard page
│   ├── chat/             # AI chat interface
│   └── upload/           # Document upload page
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, Loading)
│   └── ErrorBoundary.tsx # Error handling component
└── globals.css           # Global styles and Tailwind imports
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Home Page (`/`)
Landing page with feature overview, benefits, and call-to-action sections.

### Dashboard (`/dashboard`)
Main dashboard showing:
- Statistics overview
- Quick actions
- Recent documents
- Activity tracking

### AI Chat (`/chat`)
Interactive chat interface with:
- Real-time messaging
- AI response simulation
- Quick action buttons
- Message history

### Upload (`/upload`)
Document upload page with:
- Drag-and-drop functionality
- File type validation
- Upload progress tracking
- Supported format information

## Components

### UI Components
- **Button**: Reusable button with variants and animations
- **Card**: Flexible card component with hover effects
- **Loading**: Animated loading spinner

### Error Handling
- **ErrorBoundary**: Graceful error handling with fallback UI

## Styling

The application uses Tailwind CSS with:
- Custom color scheme
- Responsive design
- Dark mode support (prefers-color-scheme)
- Smooth transitions and animations

## Development

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Adding New Components
1. Create components in `src/components/`
2. Use TypeScript interfaces for props
3. Include proper error handling
4. Add animations with Framer Motion

### Styling Guidelines
- Use Tailwind CSS classes
- Follow responsive design principles
- Include hover and focus states
- Use consistent spacing and typography

## Deployment

The application is optimized for deployment on Vercel, Netlify, or any static hosting platform.

## Contributing

1. Follow TypeScript best practices
2. Include proper error handling
3. Add animations for better UX
4. Test responsive design
5. Update documentation as needed
