"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ResearchAssistant } from "@/components/ai/ResearchAssistant";
import Loading from "@/components/ui/Loading";

export default function ResearchAssistantPage() {
  const { data: session, status } = useSession();

  // Show loading while checking authentication
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Research Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Your AI-powered research companion for academic writing and analysis
          </p>
        </div>
        
        <ResearchAssistant />
      </div>
    </div>
  );
} 