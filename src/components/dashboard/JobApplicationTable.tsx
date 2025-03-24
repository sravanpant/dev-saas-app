// src/components/dashboard/JobApplicationTable.tsx
"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Archive, Edit, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { JobEditModal } from "./JobEditModal";
import { JobApplication, JobApplicationStatus } from "@/types/types";
import { fetchDocuments } from "@/app/appwrite";

// Table Body Skeleton Loader
const TableBodySkeleton = () => (
  <>
    {[...Array(5)].map((_, index) => (
      <TableRow key={index}>
        <TableCell>
          <Skeleton className="h-6 w-6" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
      </TableRow>
    ))}
  </>
);

export const JobApplicationTable: React.FC = () => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchDocuments();
        if (data?.documents) {
          setJobs(data.documents);
        }
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getJobs();
  }, []);

  const renderStatusBadge = (status: string) => {
    const statusVariants: {
      [key: string]:
        | "default"
        | "secondary"
        | "destructive"
        | "outline"
        | null
        | undefined;
    } = {
      applied: "default",
      interviewing: "secondary",
      offered: "outline",
      rejected: "destructive",
    };

    return (
      <Badge variant={statusVariants[status.toLowerCase()] || "default"}>
        {status}
      </Badge>
    );
  };

  const handleSelectJob = (jobId: string) => {
    setSelectedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const handleSelectAll = () => {
    setSelectedJobs(
      selectedJobs.length === jobs.length ? [] : jobs.map((job) => job.$id)
    );
  };

  const handleDeleteSelected = () => {
    console.log("Deleting jobs:", selectedJobs);
  };

  const handleArchiveSelected = () => {
    console.log("Archiving jobs:", selectedJobs);
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center p-4 border-b bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">
          Job Applications
        </h2>
        <div className="flex space-x-2">
          {selectedJobs.length > 0 && (
            <>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDeleteSelected}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleArchiveSelected}
              >
                <Archive className="mr-2 h-4 w-4" /> Archive
              </Button>
            </>
          )}
        </div>
      </div>
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[50px] font-bold text-gray-700">
              <Checkbox
                checked={selectedJobs.length === jobs.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="font-bold text-gray-700">Job ID</TableHead>
            <TableHead className="font-bold text-gray-700">Role</TableHead>
            <TableHead className="font-bold text-gray-700">
              Salary(inr)
            </TableHead>
            <TableHead className="font-bold text-gray-700">Company</TableHead>
            <TableHead className="font-bold text-gray-700">Location</TableHead>
            <TableHead className="font-bold text-gray-700">Status</TableHead>
            <TableHead className="font-bold text-gray-700">
              Applied On
            </TableHead>
            <TableHead className="font-bold text-gray-700">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableBodySkeleton />
          ) : (
            jobs.map((job) => (
              <TableRow key={job.$id}>
                <TableCell>
                  <Checkbox
                    checked={selectedJobs.includes(job.$id)}
                    onCheckedChange={() => handleSelectJob(job.$id)}
                  />
                </TableCell>
                <TableCell>{job.job_id}</TableCell>
                <TableCell>{job.job_role}</TableCell>
                <TableCell>{job.Salary_lpa_inr} LPA</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>
                  {renderStatusBadge(job.status as JobApplicationStatus)}
                </TableCell>
                <TableCell>
                  {new Date(job.$createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onSelect={() => setEditingJob(job)}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {editingJob && (
        <JobEditModal job={editingJob} onClose={() => setEditingJob(null)} />
      )}
    </div>
  );
};
