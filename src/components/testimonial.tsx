
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type TestimonialProps = {
  quote: string;
  name: string;
  title?: string;
  image?: string;
  className?: string;
};

export default function Testimonial({
  quote,
  name,
  title,
  image,
  className = "",
}: TestimonialProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className={`bg-card/80 p-6 rounded-lg shadow-sm ${className}`}>
      <blockquote className="text-lg leading-relaxed text-foreground/90">
        “{quote}”
      </blockquote>

      <figcaption className="mt-4 flex items-center gap-3 ">
        <Avatar>
          {image ? (
            <AvatarImage src={image} alt={name} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </Avatar>

        <div>
          <div className="text-sm font-semibold">{name}</div>
          {title && (
            <div className="text-xs text-muted-foreground">{title}</div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
