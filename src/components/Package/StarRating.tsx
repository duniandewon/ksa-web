import { Star } from "lucide-react";

interface Props {
  star: number;
}

export function StarRating({ star }: Props) {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from(new Array(star)).map((star) => (
        <Star size={12} key={star} fill="currentColor" />
      ))}
      {Array.from(new Array(5 - star)).map((star) => (
        <Star size={12} key={star} />
      ))}
    </div>
  );
}
