import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogPosts from "@/app/NativeComponents/Home/BlogPosts";

export default function BlogSection() {
  return (
    <section className=" bg-background py-18">
      <div className="wrapper">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold  text-foreground flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-primary"></div>
            Latest Solar Insights
          </h2>
          <p className="text-2xl font-semibold">
            Stay updated with the latest{" "}
            <span className="text-primary">
              news, tips, and trends in solar energy
            </span>
          </p>
        </div>

        {/* Blog Posts Grid */}
        <BlogPosts />

        {/* Footer */}
        <div className="text-center mt-5">
          <Link
            href="/blog"
            className="inline-flex items-center text-foreground hover:text-tertiary font-medium"
          >
            Read more from Our Blog
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
