import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  date: string;
  description:  string;
  tags: readonly string[];
  link?: string;
}

export function AchievementCard({ title, tags, link, date, description }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader>
        <div className="space-y-1 flex justify-between">
          <CardTitle className="text-base">
            <div>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}{" "}
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </div>
          </CardTitle>
          <p className="text-sm tabular-nums text-gray-500">{ date }</p>
          <div className="hidden  text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
        </div>
      </CardHeader>
      <CardDescription className=" text-xs">
        <p className="text-justify pl-1" >{description}</p>
      </CardDescription>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
