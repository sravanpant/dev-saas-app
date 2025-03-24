// src/components/dashboard/JobEditModal.tsx
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle 
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
  } from "@/components/ui/select";
  import { JobApplication, JobApplicationStatus } from "@/types/types";
  
  type JobEditModalProps = {
    job: JobApplication;
    onClose: () => void;
  };
  
  export const JobEditModal: React.FC<JobEditModalProps> = ({ 
    job, 
    onClose 
  }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Implement update logic
      onClose();
    };
  
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Job Application</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Job Role</Label>
              <Input 
                defaultValue={job.job_role} 
                placeholder="Enter job role" 
              />
            </div>
            <div>
              <Label>Company</Label>
              <Input 
                defaultValue={job.company} 
                placeholder="Enter company name" 
              />
            </div>
            <div>
              <Label>Status</Label>
              <Select defaultValue={job.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {['applied', 'interviewing', 'offered', 'rejected'].map(status => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  };