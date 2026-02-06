import React from "react";
import CardGrid, { CardProps } from "./CardGrid";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CardItem = ({ blogPosts }: CardProps) => {
  const categories = ["All", "Product", "Design", "Startup Growth"];
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="space-y-8 lg:space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-sm">Blogs</p>

          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Build Better Products with Insights & Inspiration.
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl">
            Practical insights and real stories to guide your product from
            vision to reality.
          </p>
        </div>

        {/* Tabs and Search */}
        <Tabs defaultValue="All" className="gap-8 lg:gap-16">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <ScrollArea className="bg-muted w-full rounded-lg sm:w-auto">
              <TabsList className="h-auto gap-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="hover:bg-primary/10 cursor-pointer rounded-lg px-4 text-base"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="relative max-md:w-full">
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
                <SearchIcon className="size-4" />
                <span className="sr-only">Search</span>
              </div>
              <Input
                type="search"
                placeholder="Search"
                className="peer h-10 px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
              />
            </div>
          </div>

          {/* All Posts Tab */}
          <TabsContent value="All">
            <CardGrid posts={blogPosts} />
          </TabsContent>

          {/* Category-specific Tabs */}
          {categories.slice(1).map((category, index) => (
            <TabsContent key={index} value={category}>
              <CardGrid
                posts={blogPosts.filter((post) => post.category === category)}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CardItem;
