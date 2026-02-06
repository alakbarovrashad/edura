import React from "react";
import { ArrowRightIcon, CalendarDaysIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardPost } from "@/data/Card";

export type CardProps = {
  blogPosts: CardPost[];
};

const CardGrid = ({ posts }: { posts: CardPost[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card
          key={index}
          className="group h-full overflow-hidden shadow-none transition-all duration-300"
        >
          <CardContent className="space-y-3.5">
            <div className="mb-6 overflow-hidden rounded-lg sm:mb-12">
              <a href={post.blogLink}>
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            <div className="flex items-center justify-between gap-1.5">
              <div className="text-muted-foreground flex items-center gap-1.5">
                <CalendarDaysIcon className="size-6" />
                <span>{post.date}</span>
              </div>
              <a href={post.categoryLink}>
                <Badge className="bg-primary/10 text-primary rounded-full border-0 text-sm">
                  {post.category}
                </Badge>
              </a>
            </div>
            <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
              <a href={post.blogLink}>{post.title}</a>
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <a href={post.authorLink} className="text-sm font-medium">
                {post.author}
              </a>
              <Button
                size="icon"
                variant="outline"
                className="group-hover:bg-primary! group-hover:text-primary-foreground group-hover:border-primary hover:border-primary hover:bg-primary! hover:text-primary-foreground"
                asChild
              >
                <a href={post.blogLink}>
                  <ArrowRightIcon className="size-4 -rotate-45" />
                  <span className="sr-only">Read more: {post.title}</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
