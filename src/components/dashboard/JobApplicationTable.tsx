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
import { 
  Trash2, 
  Archive, 
  Edit, 
  MoreHorizontal, 
  Filter, 
  SortDesc,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format, formatDistance } from "date-fns";
import { cn } from "@/lib/utils";

// Import types
import { 
  JobApplication, 
  JobApplicationStatus, 
  JobApplicationFormData 
} from "@/types/types";

// Import necessary components
import { AddJobApplicationDialog } from "./AddJobApplicationDialog";
import { JobEditModal } from "./JobEditModal";

// Fetch function
import { fetchDocuments } from "@/app/appwrite";

// Status Badge Component
import { StatusBadge } from "./StatusBadge";
import { TableBodySkeleton } from "./TableSkeleton";

export const JobApplicationTable: React.FC = () => {
  // State Management
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof JobApplication;
    direction: 'asc' | 'desc';
  }>({ key: '$createdAt', direction: 'desc' });

  // Fetch Jobs Effect
  useEffect(() => {
    const getJobs = async () => {
      try {
        setIsLoading(true);
        const data = await fetchDocuments();
        if (data?.documents) {
          setJobs(data.documents);
        }
      } catch (error) {
        console.error("Failed to fetch documents:", error);
        // TODO: Implement error handling (e.g., toast notification)
      } finally {
        setIsLoading(false);
      }
    };

    getJobs();
  }, []);

  // Job Selection Handlers
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

  // Bulk Action Handlers
  const handleDeleteSelected = async () => {
    try {
      // TODO: Implement actual delete logic
      console.log("Deleting jobs:", selectedJobs);
      // Optimistic update
      setJobs(jobs.filter(job => !selectedJobs.includes(job.$id)));
      setSelectedJobs([]);
    } catch (error) {
      console.error("Failed to delete jobs:", error);
      // TODO: Implement error handling
    }
  };

  const handleArchiveSelected = async () => {
    try {
      // TODO: Implement actual archive logic
      console.log("Archiving jobs:", selectedJobs);
      // Optimistic update
      setJobs(jobs.filter(job => !selectedJobs.includes(job.$id)));
      setSelectedJobs([]);
    } catch (error) {
      console.error("Failed to archive jobs:", error);
      // TODO: Implement error handling
    }
  };

  // Add Job Application Handler
  const handleAddJobApplication = async (newJob: JobApplicationFormData) => {
    try {
      // TODO: Implement actual API submission
      const submittedJob: JobApplication = {
        ...newJob,
        $id: `temp-${Date.now()}`,
        $createdAt: new Date().toISOString()
      };
      setJobs(prev => [...prev, submittedJob]);
    } catch (error) {
      console.error("Failed to add job application", error);
      // TODO: Implement error handling
    }
  };

  // Sorting Logic
  const sortedJobs = [...jobs].sort((a, b) => {
    const key = sortConfig.key;
    const direction = sortConfig.direction;
    
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-white shadow-md rounded-2xl border overflow-hidden">
      {/* Table Header */}
      <div className="flex justify-between items-center p-4 border-b bg-gray-50 rounded-t-2xl">
        <h2 className="text-xl font-semibold text-gray-800">
          Job Applications
        </h2>
        <div className="flex space-x-2 items-center">
          <TooltipProvider>
            {/* Filter Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Filter Applications</TooltipContent>
            </Tooltip>

            {/* Sort Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setSortConfig({
                    key: '$createdAt',
                    direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'
                  })}
                >
                  <SortDesc className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Sort by Date 
                {sortConfig.direction === 'asc' ? ' (Ascending)' : ' (Descending)'}
              </TooltipContent>
            </Tooltip>

            {/* Add Job Application Dialog */}
            <AddJobApplicationDialog onSubmit={handleAddJobApplication} />
          </TooltipProvider>
          
          {/* Bulk Action Buttons */}
          {selectedJobs.length > 0 && (
            <div className="flex space-x-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDeleteSelected}
                className="rounded-full"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleArchiveSelected}
                className="rounded-full"
              >
                <Archive className="mr-2 h-4 w-4" /> Archive
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Job Applications Table */}
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow className="hover:bg-gray-100">
            {/* Checkbox Column */}
            <TableHead className="w-[50px] rounded-tl-2xl">
              <Checkbox
                checked={selectedJobs.length === jobs.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>

            {/* Table Headers */}
            {[
              'Job ID', 'Role', 'Salary(inr)', 
              'Company', 'Location', 'Status', 
              'Applied On', 'Actions'
            ].map((header, index) => (
              <TableHead 
                key={header}
                className={cn(
                  "font-bold text-gray-700 cursor-pointer hover:bg-gray-200",
                  index === 7 && "rounded-tr-2xl"
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {isLoading ? (
            <TableBodySkeleton />
          ) : (
            sortedJobs.map((job, index) => (
              <TableRow 
                key={job.$id} 
                className={cn(
                  "hover:bg-gray-50 transition-colors",
                  index === sortedJobs.length - 1 && "border-b-0"
                )}
              >
                {/* Checkbox Cell */}
                <TableCell>
                  <Checkbox
                    checked={selectedJobs.includes(job.$id)}
                    onCheckedChange={() => handleSelectJob(job.$id)}
                  />
                </TableCell>

                {/* Job Details Cells */}
                <TableCell>{job.job_id}</TableCell>
                <TableCell>{job.job_role}</TableCell>
                <TableCell>{job.Salary_lpa_inr} LPA</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>
                  <StatusBadge status={job.status as JobApplicationStatus} />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{format(new Date(job.$createdAt), 'MMM dd, yyyy')}</span>
                    <span className="text-xs text-gray-500">
                      {formatDistance(new Date(job.$createdAt), new Date(), { addSuffix: true })}
                    </span>
                  </div>
                </TableCell>

                {/* Actions Cell */}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onSelect={() => setEditingJob(job)}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">
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

      {/* Edit Job Modal */}
      {editingJob && (
        <JobEditModal 
          job={editingJob} 
          onClose={() => setEditingJob(null)}
          onUpdate={(updatedJob) => {
            setJobs(prev => 
              prev.map(job => 
                job.$id === updatedJob.$id ? updatedJob : job
              )
            );
          }}
        />
      )}
    </div>
  );
};