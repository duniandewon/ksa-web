import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const sectionsHeaderVariant = cva("space-y-4", {
  variants: {
    variant: {
      default: "text-start",
      centered: "text-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props extends VariantProps<typeof sectionsHeaderVariant> {
  className?: string;
  data: { title: string; subtitle: string };
}

export function SectionsHeader({ data, variant, className }: Props) {
  return (
    <div
      className={cn(
        sectionsHeaderVariant({ variant }),
        "text-primary",
        className
      )}
    >
      <h3 className="text-md uppercase">{data.subtitle}</h3>
      <h2 className="text-2xl font-semibold">{data.title}</h2>
    </div>
  );
}
