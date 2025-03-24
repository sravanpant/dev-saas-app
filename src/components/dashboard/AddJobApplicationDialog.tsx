"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  JobApplicationStatus,
  JobApplicationFormData,
} from "@/types/types";

type AddJobApplicationDialogProps = {
  onSubmit: (jobApplication: JobApplicationFormData) => Promise<void>;
};

export const AddJobApplicationDialog: React.FC<
  AddJobApplicationDialogProps
> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<JobApplicationFormData>({
    job_role: "",
    company: "",
    location: "",
    Salary_lpa_inr: 0,
    status: "applied",
    job_id: `JD-${Math.floor(10000 + Math.random() * 90000)}`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      setIsOpen(false);
      // Reset form or show success toast
    } catch (error) {
      // Handle error (show error toast)
      console.error("Failed to add job application", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Application
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Job Application</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Job Role</Label>
              <Input
                placeholder="e.g. Full Stack Developer"
                value={formData.job_role}
                onChange={(e) =>
                  setFormData({ ...formData, job_role: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Company</Label>
              <Input
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Salary (LPA)</Label>
              <Input
                type="number"
                placeholder="Salary in LPA"
                value={formData.Salary_lpa_inr}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Salary_lpa_inr: parseFloat(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as JobApplicationStatus,
                })
              }
            >
              {(
                [
                  "applied",
                  "interviewing",
                  "offered",
                  "rejected",
                ] as JobApplicationStatus[]
              ).map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className="w-full">
            Add Job Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
