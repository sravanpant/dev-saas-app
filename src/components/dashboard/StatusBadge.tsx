import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { JobApplicationStatus } from "@/types/types";

type StatusBadgeProps = {
  status: JobApplicationStatus;
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusVariants = {
    applied: "bg-blue-100 text-blue-800",
    interviewing: "bg-yellow-100 text-yellow-800",
    offered: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <Badge 
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium",
        statusVariants[status]
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};