import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


function TestimonialCard({ name, designation, quote, image, rating }) {
  return (
    <Card
      className={
        "group/testimonial hover:from-primary-500 hover:to-primary-600 hover:text-white from-neutral/15 border-neutral/10 max-w-[280px] overflow-hidden rounded-2xl border-1 bg-gradient-to-b to-transparent transition-all duration-300 ease-in-out hover:shadow-lg md:min-w-[320px]"
      }
    >
      <CardContent className={"flex min-h-[210px] flex-col justify-between"}>
        <div>
          <div className="bg-primary-foreground flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5">
            <Star className="fill-background m-0 h-5 w-5 p-0" />
            <p className="text-background text-sm">{rating}</p>
          </div>

          <blockquote className="mt-4 line-clamp-4 text-sm font-light">
            {quote}
          </blockquote>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-semibold">{name}</p>
            <small className="text-xs">{designation}</small>
          </div>

          <Avatar className="bg-neutral/30 group-hover/testimonial:bg-neutral/50 h-12 w-12 rounded-full">
            <AvatarImage
              src={image}
              alt={`Satisfied CandySmart User ${name}`}
            />
            <AvatarFallback>
              {name.split(" ")[0][0] + name.split(" ")[1][0] || "CS"}
            </AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
