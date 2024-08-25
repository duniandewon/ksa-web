import { Building2, Star } from "lucide-react";
import { StarRating } from "./StarRating";

export interface Hotel {
  id: number;
  city: string;
  star: number;
  roomType: string;
  description: string;
}

export function Hotel({ hotel }: { hotel: Hotel }) {
  return (
    <div className="flex items-center gap-4">
      <Building2 />
      <div>
        <div className="flex items-center gap-3">
          <p>{hotel.city}:</p>
          <StarRating star={4} />
          <p className="text-xs">({hotel.roomType})</p>
        </div>
        <p className="text-sky-800 font-semibold">{hotel.description}</p>
      </div>
    </div>
  );
}
