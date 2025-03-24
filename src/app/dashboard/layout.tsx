import type { Metadata } from "next";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardProvider } from "@/app/context/DashboardContext"; // Optional context provider

export const metadata: Metadata = {
  title: "Dashboard | Job Tracker",
  description:
    "Manage your job applications and track your job search progress",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
          <DashboardProvider>{children}</DashboardProvider>
        </main>
      </div>
    </div>
  );
}
