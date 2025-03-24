import { TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const TableBodySkeleton = () => (
  <>
    {[...Array(5)].map((_, index) => (
      <TableRow 
        key={index} 
        className="hover:bg-transparent border-b last:border-b-0"
      >
        <TableCell className="py-2">
          <Skeleton className="h-6 w-6 rounded-md" />
        </TableCell>
        {[...Array(8)].map((_, colIndex) => (
          <TableCell key={colIndex} className="py-2">
            <Skeleton className="h-8 w-20 rounded-md" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);