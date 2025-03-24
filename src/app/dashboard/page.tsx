import { JobApplicationTable } from "@/components/dashboard/JobApplicationTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add dashboard statistics, charts, etc. */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Example cards */}
            <Card>
              <CardHeader>Total Applications</CardHeader>
              <CardContent>50</CardContent>
            </Card>
            <Card>
              <CardHeader>Pending Interviews</CardHeader>
              <CardContent>10</CardContent>
            </Card>
            <Card>
              <CardHeader>Offers Received</CardHeader>
              <CardContent>5</CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <JobApplicationTable />
    </div>
  );
}