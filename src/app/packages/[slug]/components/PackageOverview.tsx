export interface PackageOverview {
  duration: number;
  flightClass: string;
  hotelIncluded: boolean;
  price: number;
}

interface Props {
  data: PackageOverview;
}

export function PackageOverview({ data }: Props) {
  return (
    <div className="flex border-y-2 py-8 my-8">
      <div className="text-2xl font-semibold flex-1">
        <p>{data.duration}</p>
        <p>Days</p>
      </div>
      <div className="text-2xl font-semibold flex-1">
        <p>{data.flightClass}</p>
        <p>Plane</p>
      </div>
      <div className="text-2xl font-semibold flex-1">
        <p>Hotel</p>
        <p>{!data.hotelIncluded ? "Not" : null} Included</p>
      </div>
      <div className="text-2xl font-semibold flex-1">
        <p>Price</p>
        <p>{data.price}/Pax</p>
      </div>
    </div>
  );
}
