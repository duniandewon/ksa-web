import { Avatar } from "../Avatar";

interface Props {
  data: {
    testimonial: string;
    user: Avatar;
  };
}

export function Testimonial({ data }: Props) {
  return (
    <div className="border py-36 px-8">
      <p className="text-muted-foreground text-center">{data.testimonial}</p>
      <div className="mt-8 flex justify-center">
        <Avatar data={data.user} />
      </div>
    </div>
  );
}
