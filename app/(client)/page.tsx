import CardItem from "@/components/CardItem";
import Testimonials from "@/components/Testimonials";
import { cardPosts } from "@/data/Card";
import { testimonials } from "@/data/Testimonial";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <CardItem blogPosts={cardPosts} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
