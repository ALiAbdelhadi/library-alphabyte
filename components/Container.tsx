import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto w-full px-2 md:px-6", className ?? "")}
      {...props}
    >
      {children}
    </div>
  );
}
