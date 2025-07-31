# IntelliThesis Frontend

A modern, AI-powered thesis writing and research assistant built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **AI-Powered Analysis**: Advanced machine learning algorithms for thesis analysis
- **Smart Document Processing**: Upload and process academic papers with ease
- **Intelligent Search**: AI-powered research paper discovery
- **Content Generation**: Generate high-quality thesis content with AI assistance
- **Real-time Chat**: Interactive AI assistant for thesis guidance
- **Modern UI/UX**: Beautiful, responsive design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **UI Components**: Headless UI

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── dashboard/page.tsx     # Dashboard with analytics
│   │   ├── chat/page.tsx         # AI Chat interface
│   │   ├── upload/page.tsx       # Document upload & analysis
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   └── components/               # Reusable components (future)
├── public/                       # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intellithesis-1/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### 🏠 Homepage (`/`)
- Landing page with hero section
- Feature showcase
- Call-to-action buttons
- Modern, responsive design

### 📊 Dashboard (`/dashboard`)
- Overview of thesis progress
- Document management
- AI insights display
- Analytics and statistics
- Quick actions panel

### 💬 AI Chat (`/chat`)
- Real-time AI assistant
- Interactive messaging interface
- Quick action suggestions
- File attachment support
- Voice input capability

### 📤 Upload & Analysis (`/upload`)
- Drag-and-drop file upload
- Multiple file format support
- Real-time upload progress
- AI-powered document analysis
- Insights and recommendations

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Success**: Green (#16a34a)
- **Warning**: Yellow (#ca8a04)
- **Error**: Red (#dc2626)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Components
- Responsive grid layouts
- Card-based design
- Smooth animations
- Interactive hover states
- Loading states and progress indicators

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended config
- **Prettier**: Automatic code formatting
- **Conventions**: Follow Next.js 14 best practices

## 🌐 API Integration

The frontend is designed to work with a Django backend for:
- User authentication
- Document storage and processing
- AI model integration
- Real-time chat functionality
- Analytics and insights

## 📦 Dependencies

### Core
- `next`: 14.x - React framework
- `react`: 18.x - UI library
- `typescript`: 5.x - Type safety

### UI & Styling
- `tailwindcss`: Utility-first CSS
- `framer-motion`: Animations
- `lucide-react`: Icons
- `@headlessui/react`: Accessible UI components

### Forms & Validation
- `react-hook-form`: Form handling
- `@hookform/resolvers`: Form validation
- `zod`: Schema validation

### Utilities
- `axios`: HTTP client
- `clsx`: Conditional classes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Import the project
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment
- **AWS Amplify**: Full-stack deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Contact the development team

---

**Built with ❤️ for academic research and thesis writing**
