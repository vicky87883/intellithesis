'use client';

import { usePathname } from 'next/navigation';
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Get page title based on current route
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/dashboard':
        return 'Dashboard';
      case '/documents':
        return 'Documents';
      case '/research':
        return 'Research Papers';
      case '/conversations':
        return 'AI Conversations';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <DashboardLayout pageTitle={getPageTitle(pathname)}>
      {children}
    </DashboardLayout>
  );
} 