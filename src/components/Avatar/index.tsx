import { Avatar as Container, AvatarFallback, AvatarImage } from "../ui/avatar";

export interface Avatar {
  name: string;
  picture?: string;
  title: string;
}

interface Props {
  data: Avatar;
}

export function Avatar({ data }: Props) {
  return (
    <div className="flex items-center gap-4 max-w-fit">
      <Container className="w-12 h-12">
        <AvatarImage src={data.picture} alt={data.name} />
        <AvatarFallback>
          {data.name
            .split(" ")
            .map((name) => name[0].toUpperCase())
            .join("")}
        </AvatarFallback>
      </Container>
      <div>
        <h4 className="text-primary font-semibold capitalize">{data.name}</h4>
        <p className="text-xs">{data.title}</p>
      </div>
    </div>
  );
}
