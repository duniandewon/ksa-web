import { List } from "@/components/ui/list";

interface Activity {
  hour: string;
  activity: string;
}

export interface Itenary {
  day: number;
  date: Date;
  route: string[];
  title: string;
  activities: Activity[];
}

interface Props {
  data: Itenary;
}

export function Itenary({ data }: Props) {
  const { activities, date, day, route, title } = data;
  return (
    <div className="border">
      <div className="bg-secondary p-4 font-semibold text-primary-foreground">
        <p>
          {/* TODO: Format date */}
          Day {day} - {date.getDate()}/{date.getMonth()}/{date.getFullYear()}: {title}
        </p>
        <p>Route / Location: {route.join(" - ")}</p>
      </div>
      <div className="p-4">
        <List
          data={activities}
          keyExtractor={(data) => data.hour}
          render={(data) => (
            <p>
              {data.hour}: {data.activity}
            </p>
          )}
        />
      </div>
    </div>
  );
}
