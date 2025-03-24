// src/app/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle, Clock, Search } from "lucide-react";
import { JobApplicationTable } from "@/components/dashboard/JobApplicationTable";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search jobs, applications..."
          className="pl-10 py-2 rounded-xl border-gray-200 focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {/* Dashboard Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Applications
            </CardTitle>
            <Briefcase className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">50</div>
            <p className="text-xs text-gray-500 mt-1">+5 from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Pending Interviews
            </CardTitle>
            <Clock className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">10</div>
            <p className="text-xs text-gray-500 mt-1">+2 scheduled this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Offers Received
            </CardTitle>
            <CheckCircle className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">5</div>
            <p className="text-xs text-gray-500 mt-1">+1 new offer</p>
          </CardContent>
        </Card>
      </div>

      {/* Job Applications Table */}
      <div className="mt-6">
        <JobApplicationTable />
      </div>
    </div>
  );
}
