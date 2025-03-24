"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Settings, Archive, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/dashboard",
      icon: Home,
      label: "Dashboard",
    },
    {
      href: "/dashboard/applications",
      icon: Briefcase,
      label: "Job Applications",
    },
    {
      href: "/dashboard/archived",
      icon: Archive,
      label: "Archived Jobs",
    },
    {
      href: "/dashboard/notifications",
      icon: Bell,
      label: "Notifications",
    },
    {
      href: "/dashboard/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-2">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Job Tracker</h2>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className="block">
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
