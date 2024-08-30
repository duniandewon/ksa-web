import { Star } from "lucide-react";

interface Props {
  star: number;
  size?: number;
}

export function StarRating({ star, size = 12 }: Props) {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from(new Array(star)).map((star) => (
        <Star size={size} key={star} fill="currentColor" />
      ))}
      {Array.from(new Array(5 - star)).map((star) => (
        <Star size={size} key={star} />
      ))}
    </div>
  );
}
